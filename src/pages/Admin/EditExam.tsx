"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  Pencil,
  Plus,
  RotateCcw,
  Timer,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function EditExamPage({ params }: { params: { id: string } }) {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      type: "Multiple choice",
      points: 2,
      question:
        "In Java, which exception is thrown when a method cannot locate a class it tries to load?",
      options: [
        "ClassNotFoundException",
        "NoClassDefFoundError",
        "ClassNotLoadedException",
        "ClassLoadError",
      ],
    },
    {
      id: 2,
      type: "True / False",
      points: 2,
      question: "In Java, a class can extend multiple classes.",
      options: ["True", "False"],
    },
  ]);

  const [activeQuestion, setActiveQuestion] = useState(1);
  const [examDetails, setExamDetails] = useState({
    title: "Object Oriented Programming Test",
    module: "Object Oriented Programming",
    totalMarks: 100,
    duration: 30,
    topics: ["Inheritance", "Encapsulation", "Class and Object Concepts"],
  });

  const handleAddQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      type: "Multiple choice",
      points: 2,
      question: "",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    };
    setQuestions([...questions, newQuestion]);
    setActiveQuestion(newQuestion.id);

    // Scroll to the new question after a short delay to allow rendering
    setTimeout(() => {
      const newQuestionElement = document.getElementById(
        `question-${newQuestion.id}`
      );
      if (newQuestionElement) {
        newQuestionElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handlePointChange = (questionId: number, change: number) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? { ...q, points: Math.max(1, q.points + change) }
          : q
      )
    );
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Link to="/exams">
          <Button variant="ghost" size="sm">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Exams
          </Button>
        </Link>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Questions</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Pencil className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
          <Button className="bg-emerald-500 hover:bg-emerald-600" size="sm">
            <Trophy className="mr-2 h-4 w-4" />
            Try Exam
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Questions</h2>
            <Button variant="outline" size="sm" onClick={handleAddQuestion}>
              <Plus className="mr-2 h-4 w-4" />
              Add Question
            </Button>
          </div>

          {questions.map((question) => (
            <Card
              key={question.id}
              id={`question-${question.id}`}
              className={`overflow-hidden ${
                activeQuestion === question.id ? "border-emerald-500" : ""
              } hover:border-emerald-300 cursor-pointer`}
              onClick={() => setActiveQuestion(question.id)}
            >
              <CardContent className="p-0">
                <div className="flex items-center justify-between border-b p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-sm font-medium">
                      {question.id}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {question.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <RotateCcw className="h-4 w-4" />
                      <span className="sr-only">Reset</span>
                    </Button>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 text-muted-foreground"
                        onClick={() => handlePointChange(question.id, -1)}
                      >
                        -
                      </Button>
                      <span className="font-medium text-emerald-500">
                        {question.points} PT
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 text-muted-foreground"
                        onClick={() => handlePointChange(question.id, 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <Input
                    value={question.question}
                    onChange={(e) => {
                      setQuestions(
                        questions.map((q) =>
                          q.id === question.id
                            ? { ...q, question: e.target.value }
                            : q
                        )
                      );
                    }}
                    className="font-medium mb-4 border-none p-0 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder="Enter your question here..."
                  />
                  <div className="space-y-2">
                    {question.options.map((option, index) => (
                      <div
                        key={index}
                        className="border rounded-md p-3 text-sm"
                      >
                        <Input
                          value={option}
                          onChange={(e) => {
                            const newOptions = [...question.options];
                            newOptions[index] = e.target.value;
                            setQuestions(
                              questions.map((q) =>
                                q.id === question.id
                                  ? { ...q, options: newOptions }
                                  : q
                              )
                            );
                          }}
                          className="border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder={`Option ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <Card>
            <CardContent className="p-4 space-y-6">
              <div>
                <h2 className="text-lg font-medium mb-4">About exam</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-muted p-2 rounded-md">
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
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Module
                      </div>
                      <div className="font-medium">{examDetails.module}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-muted p-2 rounded-md">
                      <Trophy className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Total marks
                      </div>
                      <div className="font-medium">
                        {examDetails.totalMarks}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-muted p-2 rounded-md">
                      <Timer className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Duration
                      </div>
                      <div className="font-medium">
                        {examDetails.duration} min
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Select Topics</h3>
                  <Button
                    variant="link"
                    size="sm"
                    className="h-auto p-0 text-emerald-500"
                  >
                    View all
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {examDetails.topics.map((topic) => (
                    <Badge key={topic} variant="outline" className="rounded-md">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
