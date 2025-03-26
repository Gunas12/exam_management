"use client";

import { useState } from "react";
import {
  BarChart2,
  BookOpen,
  Calendar,
  FileText,
  LogOut,
  Menu,
  Settings,
  Timer,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const navItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: BarChart2,
  },
  {
    title: "Exams",
    href: "/admin/exams",
    icon: FileText,
  },
  {
    title: "Modules",
    href: "/admin/results",
    icon: BookOpen,
  },
  {
    title: "Sessions",
    href: "/sessions",
    icon: Timer,
  },
  {
    title: "Schedules",
    href: "/schedules",
    icon: Calendar,
  },
];

export function AppSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-200 ease-in-out md:hidden ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsMobileOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
          <span className="font-semibold">Teacher Dashboard</span>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors"
              )}
              onClick={() => setIsMobileOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="p-4 space-y-1 border-t">
          <Link
            to="/settings"
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors"
            )}
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
          <Link
            to="/logout"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
            onClick={() => setIsMobileOpen(false)}
          >
            <LogOut className="h-5 w-5" />
            Log out
          </Link>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div
        className={`hidden md:block border-r min-h-screen ${
          isOpen ? "w-[220px]" : "w-[70px]"
        } transition-all duration-300 flex-shrink-0`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          {isOpen && <span className="font-semibold">Dashboard</span>}
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors"
              )}
            >
              <item.icon className="h-5 w-5" />
              {isOpen && item.title}
            </Link>
          ))}
        </nav>
        <div className="p-4 space-y-1 border-t">
          <Link
            to="/settings"
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors"
            )}
          >
            <Settings className="h-5 w-5" />
            {isOpen && "Settings"}
          </Link>
          <Link
            to="/logout"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            <LogOut className="h-5 w-5" />
            {isOpen && "Log out"}
          </Link>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="fixed top-4 left-4 z-30 md:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => setIsMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </>
  );
}
