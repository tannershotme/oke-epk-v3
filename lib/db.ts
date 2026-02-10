import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | null | undefined;
};

function createPrismaClient(): PrismaClient | null {
    if (!process.env.DATABASE_URL) {
        console.warn(
            "[db] DATABASE_URL is not set. Contact submissions will be logged to console only."
        );
        return null;
    }

    try {
        return new PrismaClient({
            log:
                process.env.NODE_ENV === "development"
                    ? ["warn", "error"]
                    : ["error"],
        });
    } catch (e) {
        console.error("[db] Failed to create Prisma client:", e);
        return null;
    }
}

export const prisma: PrismaClient | null =
    globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
