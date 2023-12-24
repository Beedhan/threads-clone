import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { LoginSchema } from "@/common/validation/auth";
import { TRPCError } from "@trpc/server";
import { hash } from "argon2";

export const authRouter = createTRPCRouter({
  signup: publicProcedure.input(LoginSchema).mutation(async ({ input, ctx }) => {
    const { email, password } = input;
    const exists = await ctx.db.user.findUnique({
      where: {
        email,
      },
    });
    if (exists)
      throw new TRPCError({ message: "User already exists", code: "CONFLICT" });
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
});
