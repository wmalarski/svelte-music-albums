import { dev } from '$app/environment';
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
    dev ? ["query", "error", "warn"] : ["error"],
  });

if (dev) globalForPrisma.prisma = db;

export const prisma = db;
