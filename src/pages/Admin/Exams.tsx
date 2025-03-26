import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const exams = [
  {
    id: 1,
    title: "Midterm Exam - OOP",
    module: "Object Oriented Programming",
    date: "Jan 22, 2024",
    questions: 30,
    duration: "90 min",
  },
  {
    id: 2,
    title: "Final Exam - SFSD",
    module: "Software for System Development",
    date: "Feb 15, 2024",
    questions: 40,
    duration: "120 min",
  },
  {
    id: 3,
    title: "Quiz 2 - ALSOS",
    module: "Algorithms and Operating Systems",
    date: "Mar 5, 2024",
    questions: 20,
    duration: "45 min",
  },
  {
    id: 4,
    title: "Practical Test - BD",
    module: "Big Data",
    date: "Mar 19, 2024",
    questions: 25,
    duration: "60 min",
  },
];

export default function Exams() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Exams</h1>
        <div className="flex items-center gap-2">
          <Link to="/exams/generate">
            <Button className="bg-emerald-500 hover:bg-emerald-600">
              <Plus className="mr-2 h-4 w-4" />
              Generate Exam With AI
            </Button>
          </Link>
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Create Exam
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search exams..." className="pl-8" />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exams.map((exam) => (
          <Link key={exam.id} to={`/exams/${exam.id}`}>
            <Card className="h-full cursor-pointer hover:border-emerald-500 transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{exam.title}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {exam.module}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm">
                  <div className="space-y-2">
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
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="4"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" x2="16" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="2" y2="6"></line>
                        <line x1="3" x2="21" y1="10" y2="10"></line>
                      </svg>
                      <span>{exam.date}</span>
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
                        <path d="M12 13V7"></path>
                        <circle cx="12" cy="17" r="1"></circle>
                        <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"></path>
                      </svg>
                      <span>{exam.duration}</span>
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
                      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                    </svg>
                    <span>{exam.questions} questions</span>
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
