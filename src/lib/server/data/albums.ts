import type { DataContext } from './context';

const addReviewCounts = async <T extends { id: string }>(context: DataContext, albums: T[]) => {
	const albumIds = albums.map((album) => album.id);

	const groups = await context.prisma.review.groupBy({
		_avg: { rate: true },
		_count: { albumId: true },
		by: ['albumId'],
		having: { albumId: { in: albumIds } },
		where: { userId: context.user.id }
	});

	const counts = groups.reduce<Record<string, number>>((prev, curr) => {
		prev[curr.albumId] = curr._count.albumId;
		return prev;
	}, {});

	const averages = groups.reduce<Record<string, number>>((prev, curr) => {
		prev[curr.albumId] = curr._avg.rate || 0;
		return prev;
	}, {});

	return albums.map((album) => ({
		...album,
		avg: averages[album.id] || 0,
		reviews: counts[album.id] || 0
	}));
};

type DeleteAlbumArgs = {
	ctx: DataContext;
	id: string;
};

export const deleteAlbum = ({ ctx, id }: DeleteAlbumArgs) => {
	return ctx.prisma.album.deleteMany({
		where: { id, userId: ctx.user.id }
	});
};

type FindAlbumArgs = {
	ctx: DataContext;
	id: string;
};

export const findAlbum = async ({ ctx, id }: FindAlbumArgs) => {
	const album = await ctx.prisma.album.findFirst({
		include: { artist: true, reviews: true },
		where: { id }
	});

	if (!album) {
		return { album: null, albums: [], reviews: [] };
	}

	const [albums, reviews] = await Promise.all([
		ctx.prisma.album.findMany({
			where: { artistId: album.artistId }
		}),
		ctx.prisma.review.findMany({
			where: { album: { artistId: album.artistId }, userId: ctx.user.id }
		})
	]);

	const counts = reviews.reduce<Record<string, number>>((prev, curr) => {
		const count = prev[curr.albumId] || 0;
		prev[curr.albumId] = count + 1;
		return prev;
	}, {});

	const withCounts = albums.map((album) => ({
		...album,
		avg: 0,
		reviews: counts[album.id] || 0
	}));

	return { album, albums: withCounts, reviews };
};

export type FindAlbumResult = Awaited<ReturnType<typeof findAlbum>>;

type FindAlbumsArgs = {
	ctx: DataContext;
	query: string;
	skip: number;
	take: number;
};

export const findAlbums = async ({ ctx, query, skip, take }: FindAlbumsArgs) => {
	const [albums, count] = await Promise.all([
		ctx.prisma.album.findMany({
			include: { artist: true },
			orderBy: { createdAt: 'desc' },
			skip: skip || 0,
			take: take,
			where: {
				OR: [
					{ title: { contains: query, mode: 'insensitive' } },
					{
						artist: {
							name: { contains: query, mode: 'insensitive' }
						}
					}
				]
			}
		}),
		ctx.prisma.album.count({
			where: {
				OR: [{ title: { contains: query } }, { artist: { name: { contains: query } } }]
			}
		})
	]);

	const albumsWithCounts = await addReviewCounts(ctx, albums);

	return { albums: albumsWithCounts, count };
};

export type FindAlbumsResult = Awaited<ReturnType<typeof findAlbums>>;
export type FindAlbumsResultItem = FindAlbumsResult['albums'][0];

type FindRandomArgs = {
	ctx: DataContext;
	take: number;
};

export const findRandom = async ({ ctx, take }: FindRandomArgs) => {
	const result = await ctx.prisma.$queryRaw<{ id: string }[]>`
    select "Album".id from "Album" 
    left join "Review" on "Album".id = "Review"."albumId" 
    where "Review".id is NULL or "Review"."userId" != ${ctx.user.id}
    order by random()
    LIMIT ${take};
  `;

	const ids = result.map((entry) => entry.id);

	const albums = await ctx.prisma.album.findMany({
		include: { artist: true },
		where: { id: { in: ids } }
	});

	const withReviews = albums.map((album) => ({
		...album,
		avg: 0,
		reviews: 0
	}));

	return { albums: withReviews };
};

type FindRandomResult = Awaited<ReturnType<typeof findAlbums>>;
export type FindRandomResultItem = FindRandomResult['albums'][0];

type UpdateAlbumArgs = {
	ctx: DataContext;
	id: string;
	title?: string;
	year?: number;
};

export const updateAlbum = ({ ctx, id, title, year }: UpdateAlbumArgs) => {
	return ctx.prisma.album.updateMany({
		data: {
			...(title ? { title } : {}),
			...(year || year === 0 ? { year } : {})
		},
		where: { id, userId: ctx.user.id }
	});
};
