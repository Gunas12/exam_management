import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { exams } from "./Admin/Exams";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function TestSelectionPage() {
  return (
    <div className="w-ful  flex flex-col  justify-center w-full">
      <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b0">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 md:mb-12 dark:text-white">
            Choose the test that suits you.
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6  ">
            {exams.map((exam) => (
              <Link key={exam.id} to={`/exams/${exam.id}`}>
                <Card className="h-full cursor-pointer hover:border-emerald-500 transition-colors  bg-violet-200  border-none rounded-2xl p-4 md:p-6   hover:scale-105">
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
                    <Button
                      asChild
                      className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 mt-8"
                    >
                      <Link to={`/test/${exam.id}`}>start</Link>
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
