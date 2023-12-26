
import { CreatePostSchema } from "@/common/validation/post";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const postRouter = createTRPCRouter({
  create: protectedProcedure
    .input(CreatePostSchema)
    .mutation(async ({ input, ctx }) => {
      await ctx.db.threads.create({
        data: {
          Thread: {
            create: {
              text: input.text,
              User:{
                connect:{
                  id:ctx.session.user.id
                },
              }
            },
          },
        },
      });
      return {success:true};
    }),
    timeline:protectedProcedure.query(({ctx})=>{
      return ctx.db.threads.findMany({
        include:{
          Thread:{
            include:{
              User:{
                select:{
                  name:true,
                  image:true,
                  username:true
                }
              },
            }
          },
        }
      });
    })
});
