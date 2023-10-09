import type { DataContext } from './context';

type CountReviewsByDateArgs = {
	ctx: DataContext;
};

export const countReviewsByDate = async ({ ctx }: CountReviewsByDateArgs) => {
	const result = await ctx.prisma.$queryRaw<{ count: number; date: Date }[]>`
    SELECT DATE_TRUNC('day', "createdAt") as date, count(id) 
    FROM "public"."Review" 
    WHERE "createdAt" > CURRENT_DATE - INTERVAL '1 year' AND "userId" = ${ctx.user.id} 
    GROUP BY DATE_TRUNC('day', "createdAt") 
    ORDER BY DATE_TRUNC('day', "createdAt") DESC
`;

	return result.map((entry) => ({
		count: Number(entry.count),
		date: entry.date.toISOString()
	}));
};

type CreateReviewArgs = {
	ctx: DataContext;
	albumId: string;
	rate: number;
	text: string;
};

export const createReview = async ({ ctx, albumId, rate, text }: CreateReviewArgs) => {
	console.log({ session: ctx.session, user: ctx.user, albumId, rate, text });

	const result = await ctx.prisma.review.create({
		data: { albumId, rate, text, userId: ctx.user.id }
	});
	return result;
};

type DeleteReviewArgs = {
	ctx: DataContext;
	id: string;
};

export const deleteReview = ({ ctx, id }: DeleteReviewArgs) => {
	return ctx.prisma.review.deleteMany({
		where: { id, userId: ctx.user.id }
	});
};

type FindReviewArgs = {
	ctx: DataContext;
	id: string;
};

export const findReview = async ({ ctx, id }: FindReviewArgs) => {
	const result = await ctx.prisma.review.findFirst({
		include: { album: { include: { artist: true } } },
		where: { id, userId: ctx.user.id }
	});
	return result;
};

type FindReviewsArgs = {
	ctx: DataContext;
	skip: number;
	take: number;
};

export const findReviews = async ({ ctx, skip, take }: FindReviewsArgs) => {
	const [reviews, count] = await Promise.all([
		ctx.prisma.review.findMany({
			include: { album: { include: { artist: true } } },
			orderBy: { createdAt: 'desc' },
			skip: skip,
			take: take,
			where: { userId: ctx.user.id }
		}),
		ctx.prisma.review.count({
			where: { userId: ctx.user.id }
		})
	]);
	return { count, reviews };
};

type FindReviewsResult = Awaited<ReturnType<typeof findReviews>>;
export type FindReviewsResultItem = FindReviewsResult['reviews'][0];

type UpdateReviewArgs = {
	ctx: DataContext;
	id: string;
	rate?: number;
	text?: string;
};

export const updateReview = ({ ctx, id, rate, text }: UpdateReviewArgs) => {
	return ctx.prisma.review.updateMany({
		data: {
			...(text ? { text } : {}),
			...(rate || rate === 0 ? { rate } : {})
		},
		where: { id, userId: ctx.user.id }
	});
};
