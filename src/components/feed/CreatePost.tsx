import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

const CreatePost = () => {
  return (
    <div className="border-b py-4 flex items-center justify-between">
      <Avatar>
        <AvatarImage src="/avatar.jpg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="text-gray-400 pl-3 w-full">Start a thread...</p>
      <Button className="rounded-full px-5" disabled>Post</Button>
    </div>
  );
};

export default CreatePost;
