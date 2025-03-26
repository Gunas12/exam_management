"use client";

import type React from "react";

import { useState } from "react";

import { Eye, EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import { useNavigate } from "react-router-dom";
export default function Login({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
const examniersNames=[
  {
    name:"ali",
    password:"1334",
  },
  {
    name:"vali",
    password:"124445",
  
  },
  {
    name:"vusala",
    password:"345",
  
  },
  {
    name:"admin",
    password:'13345'
  },

]


const navigate=useNavigate();
const handleLogin = () => {
    const user = examniersNames.find(user => user.name === userName && user.password === password);

  if (user && user.name==="admin") {
    navigate("/admin"); 
  } 
  else if(user){
    navigate("/")
  }
  else if(user===null){
    navigate("/login")

  }
   else {
    setError("Incorrect username or password"); 
  }
};

  return (
    <div className="w-full flex justify-center items-center h-[100vh]">
      <div className={cn("w-full max-w-sm ", className)} {...props}>
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-1">Sign in</h1>
          <p className="text-muted-foreground text-sm">
            Please login to continue to your account.
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="text" className="text-sm text-muted-foreground">
              Username
            </label>
            <Input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="border-gray-200 "
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="text-sm text-muted-foreground">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-gray-200 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm text-muted-foreground cursor-pointer"
              >
                Keep me logged in
              </label>
            </div>
          </div>

          <Button onClick={handleLogin}
            type="submit"
            className="w-full w-max-md bg-purple-600 hover:bg-purple-700 text-white border rounded-2xl"
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}
