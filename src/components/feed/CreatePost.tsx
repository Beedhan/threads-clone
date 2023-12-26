import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader
} from "@/components/ui/dialog";
import { api } from "@/utils/api";
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CreatePost = () => {
  const [createPopup, setCreatePopup] = useState(false);
  const [postText, setPostText] = useState("");
  const { mutate } = api.post.create.useMutation();
  const context = api.useContext();
  const handlePostText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostText(e.target.value);
  };

  const handlePostSubmit = () => {
    setCreatePopup(false);
    toast.loading("Submitting...", {
      id: "submitting",
    });
    mutate(
      {
        text: postText,
      },
      {
        onSuccess() {
          toast.success("Submitted", { id: "submitting",duration:1000 });
          void context.post.timeline.invalidate();
        },
      },
    );
  };

  return (
    <>
      <div
        onClick={() => setCreatePopup(true)}
        className="flex items-center justify-between border-b py-4"
      >
        <Avatar>
          <AvatarImage src="/avatar.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="w-full pl-3 text-gray-400">Start a thread...</p>
        <Button className="rounded-full px-5" disabled>
          Post
        </Button>
      </div>
      <Dialog open={createPopup} onOpenChange={(val) => setCreatePopup(val)}>
        <DialogContent>
          <DialogHeader className="absolute -top-10 flex w-full justify-center sm:text-center">
            <p className="font-bold text-white">New thread</p>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/avatar.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center gap-0">
              <p className="text-sm font-semibold">Beedhan.js</p>
              <Input
                onChange={handlePostText}
                placeholder="Start a thread..."
                className="border-none bg-white focus-visible:ring-0 w-full"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              className="rounded-full px-5"
              disabled={postText === ""}
              onClick={handlePostSubmit}
            >
              Post
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreatePost;
