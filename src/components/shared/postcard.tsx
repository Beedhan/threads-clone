import type { Thread } from "@prisma/client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Button } from "../ui/button";

const Postcard = ({ post }: { post: Thread[] }) => {
  return (
    <div className="border-b-2 py-2">
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center">
          <Avatar>
            <AvatarImage src="/avatar.jpg" />
            <AvatarFallback>CN</AvatarFallback>
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
              <p className="cursor-pointer text-sm font-semibold">Beedhan.js</p>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 rounded-lg p-5">
              <div className="flex justify-between">
                <div>
                  <p className="text-md font-bold">Name</p>
                  <p className="text-md">Beedhan.js</p>
                </div>
                <Avatar>
                  <AvatarImage src="/avatar.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
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
