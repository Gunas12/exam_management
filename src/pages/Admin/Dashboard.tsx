import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Plus,
  CalendarIcon,
  Users,
  BarChart2,
  BookOpen,
} from "lucide-react";

import { Link } from "react-router-dom";
import ModeToggle from "@/components/ui/mode-toggle";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Welcome back Teacher 👋</h1>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="ghost" size="icon">
            <span className="sr-only">Notifications</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
          </Button>
          <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
            <img
              src="/placeholder.svg?height=32&width=32"
              alt="User avatar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-emerald-500 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Exams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3xl font-bold">12</div>
                <div className="text-xs opacity-70">10% of total</div>
              </div>
              <FileText className="h-5 w-5 opacity-70" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3xl font-bold">+320</div>
                <div className="text-xs text-muted-foreground">in 8 groups</div>
              </div>
              <Users className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Average Scores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3xl font-bold">64.3%</div>
                <div className="text-xs text-muted-foreground">
                  20% of total
                </div>
              </div>
              <BarChart2 className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Modules</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3xl font-bold">4</div>
                <div className="text-xs text-muted-foreground">+31 topics</div>
              </div>
              <BookOpen className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-1">
          <CardHeader>
            <CardTitle>Average Exam Scores By Module</CardTitle>
            <div className="text-sm text-muted-foreground">
              January - June 2024
            </div>
          </CardHeader>
          <CardContent>
            <div className="mt-4 text-sm text-muted-foreground">
              Trending up by 5.2% this month
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-1">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <div className="text-sm text-muted-foreground">
              January - June 2024
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-md p-3">
              <div>You created a new exam:</div>
              <div className="font-medium">"Midterm Exam - SFSD"</div>
              <div className="text-xs text-muted-foreground mt-1">just now</div>
            </div>
            <div className="border rounded-md p-3">
              <div>You edited the module:</div>
              <div className="font-medium">"Advanced Database Systems"</div>
              <div className="text-xs text-muted-foreground mt-1">just now</div>
            </div>
            <div className="border rounded-md p-3">
              <div>You deleted the exam:</div>
              <div className="font-medium">"Quiz 1 - OOP"</div>
              <div className="text-xs text-muted-foreground mt-1">just now</div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-1">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <div className="text-sm text-muted-foreground">
              January - June 2024
            </div>
          </CardHeader>
          <CardContent>
            <div className="mt-4 border-t pt-4">
              <div className="font-medium">Midterm Exam - OOP</div>
              <div className="text-sm text-muted-foreground">
                January 22, 14:00 - 16:00
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Link to="/admin/exams">
            <Button className="bg-emerald-500 hover:bg-emerald-600">
              <Plus className="mr-2 h-4 w-4" />
              Generate Exam With AI
            </Button>
          </Link>

          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Create Exam
          </Button>
          <Button variant="outline">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Schedule Exam
          </Button>
        </div>
      </div>
    </div>
  );
}
