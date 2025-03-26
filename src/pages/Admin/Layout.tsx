import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom"; // 🟢 Outlet əlavə olunur
import type React from "react";

export const metadata = {
  title: "Teacher Dashboard",
  description:
    "Teacher Dashboard for managing exams, modules, sessions and schedules",
};

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1 overflow-auto w-full md:pl-[70px] lg:pl-[10px] pt-16 md:pt-0">
        <Outlet />
      </main>
    </div>
  );
}
