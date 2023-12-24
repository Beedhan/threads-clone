import React from "react";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Feed from "@/assets/icons/feed.svg"
import FeedSelected from "@/assets/icons/feed_selected.svg"
import Explore from "@/assets/icons/explore.svg"
import ExploreSelected from "@/assets/icons/explore_selected.svg"
import Heart from "@/assets/icons/heart.svg"
import HeartSelected from "@/assets/icons/heart_selected.svg"
import User from "@/assets/icons/user.svg"
import UserSelected from "@/assets/icons/user_selected.svg"
import Write from "@/assets/icons/write.svg"
import WriteSelected from "@/assets/icons/write_selected.svg"
import Menu from "@/assets/icons/menu.svg"
const Navbar = () => {
  return (
    <nav className="mx-auto flex w-4/5 items-center justify-between pr-8 py-1">
      <Logo />
      <div className="flex gap-3">
        <Button variant={"ghost"} className="p-8">
          <Feed/>
        </Button>
        <Button className="p-8" variant={"ghost"}>
          <Explore />
        </Button>
        <Button className="p-8" variant={"ghost"}>
          <Write />
        </Button>
        <Button className="p-8" variant={"ghost"}>
          <Heart />
        </Button>
        <Button className="p-8" variant={"ghost"}>
          <User />
        </Button>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant={"ghost"}><Menu className="text-slate-400"/></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Switch appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>About</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Report a problem</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Navbar;
