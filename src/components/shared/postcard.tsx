import type { User } from "@prisma/client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Button } from "../ui/button";

type ThreadWithUser = {
  User: {
    name: string | null;
    username: string | null;
    image: string | null;
    email: string | null;
  };
} & {
  id: string;
  text: string;
  threadsId: string;
  inReplyToId: string | null;
  postOn: Date;
  userId: string;
};
const Postcard = ({ post }: { post: ThreadWithUser[] }) => {
  return (
    <div className="border-b-2 py-2">
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center">
          <Avatar>
            <AvatarImage src={post[0]?.User.image ?? ""} />
            <AvatarFallback>
              {post[0]?.User?.email?.split("@")[0]}
            </AvatarFallback>
          </Avatar>
          <div className="relative h-full">
            <div className="absolute">
              <svg
                viewBox="0 0 21 100"
                width={21}
                height={"20"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 1L18 100"
                  strokeWidth={"2"}
                  stroke="black"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-0">
          <HoverCard>
            <HoverCardTrigger>
              <p className="cursor-pointer text-sm font-semibold">
                {post[0]?.User?.email?.split("@")[0]}
              </p>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 rounded-lg p-5">
              <div className="flex justify-between">
                <div>
                  <p className="text-md font-bold">{post[0]?.User.name}</p>
                  <p className="text-md">{post[0]?.User.username}</p>
                </div>
                <Avatar>
                  <AvatarImage src={post[0]?.User.image ?? ""} />
                  <AvatarFallback>
                    {post[0]?.User?.email?.split("@")[0]}
                  </AvatarFallback>
                </Avatar>
              </div>
              <p className="text-md mt-4">Description</p>
              <p className="text-md my-2">2,000 followers</p>
              <Button className="w-full">Follow</Button>
            </HoverCardContent>
          </HoverCard>
          {post[0]?.text}
        </div>
      </div>
    </div>
  );
};

export default Postcard;
