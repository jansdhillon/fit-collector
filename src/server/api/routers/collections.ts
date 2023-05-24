import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const collectionsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.collection.findMany();
  }),
});
