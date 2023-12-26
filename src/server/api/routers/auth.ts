import { LoginSchema } from "@/common/validation/auth";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { TRPCClientError } from "@trpc/client";
import { TRPCError } from "@trpc/server";
import { hash } from "argon2";

export const authRouter = createTRPCRouter({
  signup: publicProcedure
    .input(LoginSchema)
    .mutation(async ({ input, ctx }) => {
      const { email, password } = input;
      const exists = await ctx.db.user.findUnique({
        where: {
          email,
        },
      });
      if (exists)
        throw new TRPCError({
          message: "User already exists",
          code: "CONFLICT",
        });
      const hashedPwd = await hash(password);
      await ctx.db.user.create({
        data: {
          email,
          password: hashedPwd,
        },
      });
      return {
        status: 201,
        message: "Account created successfully",
      };
    }),
  details: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
    });
    if (!user) {
      throw new TRPCClientError("User not found");
    }
    if (user.username === null) {
      return { completed: false };
    }else{
      return { completed: true };
    }
  }),
});
