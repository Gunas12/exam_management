import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const modules = [
  {
    id: 1,
    title: "Object Oriented Programming",
    code: "OOP",
    topics: 12,
    exams: 4,
    students: 120,
  },
  {
    id: 2,
    title: "Software for System Development",
    code: "SFSD",
    topics: 10,
    exams: 3,
    students: 85,
  },
  {
    id: 3,
    title: "Algorithms and Operating Systems",
    code: "ALSOS",
    topics: 15,
    exams: 5,
    students: 95,
  },
  {
    id: 4,
    title: "Big Data",
    code: "BD",
    topics: 8,
    exams: 2,
    students: 65,
  },
  {
    id: 5,
    title: "Advanced Database Systems",
    code: "ADS",
    topics: 9,
    exams: 3,
    students: 70,
  },
  {
    id: 6,
    title: "Web Development",
    code: "WD",
    topics: 14,
    exams: 4,
    students: 110,
  },
];

export default function Results() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Modules</h1>
        <Button className="bg-emerald-500 hover:bg-emerald-600">
          <Plus className="mr-2 h-4 w-4" />
          Add Module
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search modules..."
            className="pl-8"
          />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((module) => (
          <Link key={module.id} href={`/modules/${module.id}`}>
            <Card className="h-full cursor-pointer hover:border-emerald-500 transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{module.title}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  Code: {module.code}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span>{module.topics} topics</span>
                    </div>
                    <div className="flex items-center gap-2">
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
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <rect
                          width="8"
                          height="4"
                          x="8"
                          y="2"
                          rx="1"
                          ry="1"
                        ></rect>
                      </svg>
                      <span>{module.exams} exams</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
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
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span>{module.students} students</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
