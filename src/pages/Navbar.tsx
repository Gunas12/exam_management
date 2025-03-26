"use client";

import { useState } from "react";

import { User, LogOut } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ModeToggle from "@/components/ui/mode-toggle";

export default function Navbar() {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    image: "/placeholder.svg?height=40&width=40",
  });

  return (
    <header className="sticky top-0 flex justify-center z-50  border-b border-gray-500  bg-white px-2 dark:bg-black">
      <div className="container flex h-18 items-center justify-between w-[95%]">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-purple-600 text-white font-bold text-xl p-2 px-3 rounded">
            E
          </div>
          <span className="font-bold text-xl">Exam</span>
        </Link>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-10 w-10 rounded-full"
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback className="bg-purple-100 text-purple-600">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-[#fff]"
              align="end"
              forceMount
            >
              <div className="flex flex-col space-y-1 p-2">
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user.email}
                </p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  to="/profile"
                  className="flex items-center cursor-pointer"
                >
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500 focus:text-red-500 cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
