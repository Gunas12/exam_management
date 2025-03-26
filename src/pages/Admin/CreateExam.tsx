"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  Pencil,
  Plus,
  RotateCcw,
  Timer,
  Trophy,
} from "lucide-react";
import { QuestionEditor } from "@/components/question-editor";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link, useNavigate } from "react-router-dom";

export default function CreateExamPage() {
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
  const [publishDialogOpen, setPublishDialogOpen] = useState(false);
  const [savingDraft, setSavingDraft] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const navigate = useNavigate();
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

  const handleQuestionChange = (updatedQuestion: any) => {
    setQuestions(
      questions.map((q) => (q.id === updatedQuestion.id ? updatedQuestion : q))
    );
  };

  const handleDeleteQuestion = (questionId: number) => {
    if (questions.length <= 1) return;

    const newQuestions = questions.filter((q) => q.id !== questionId);
    setQuestions(newQuestions);

    if (activeQuestion === questionId) {
      setActiveQuestion(newQuestions[0]?.id || 0);
    }
  };

  const handleSaveDraft = () => {
    setSavingDraft(true);

    setTimeout(() => {
      setSavingDraft(false);

      localStorage.setItem(
        "examDraft",
        JSON.stringify({
          examDetails,
          questions,
        })
      );

      alert("Exam draft saved successfully!");
    }, 1000);
  };

  const handlePublish = () => {
    setPublishDialogOpen(true);
  };

  const confirmPublish = () => {
    setPublishing(true);

    const newExam = {
      id: Date.now(),
      title: examDetails.title,
      module: examDetails.module,
      questions: questions.length,
      duration: `${examDetails.duration} min`,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      type: "manual",
    };

    const savedExams = localStorage.getItem("teacherExams");
    let currentExams = [];

    if (savedExams) {
      try {
        currentExams = JSON.parse(savedExams);
      } catch (error) {
        console.error("Failed to parse saved exams:", error);
      }
    }

    const updatedExams = [...currentExams, newExam];

    // Save back to localStorage
    localStorage.setItem("teacherExams", JSON.stringify(updatedExams));

    // Simulate API call delay
    setTimeout(() => {
      setPublishing(false);
      setPublishDialogOpen(false);

      navigate("/exams");
    }, 1500);
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
          <h1 className="text-2xl font-bold">Create Exam</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleSaveDraft}
            disabled={savingDraft}
          >
            {savingDraft ? (
              <>Saving...</>
            ) : (
              <>
                <Pencil className="mr-2 h-4 w-4" />
                Save Draft
              </>
            )}
          </Button>
          <Button
            className="bg-emerald-500 hover:bg-emerald-600"
            size="sm"
            onClick={handlePublish}
            disabled={publishing}
          >
            <Trophy className="mr-2 h-4 w-4" />
            Publish Exam
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
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteQuestion(question.id);
                      }}
                    >
                      <RotateCcw className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 text-muted-foreground"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePointChange(question.id, -1);
                        }}
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
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePointChange(question.id, 1);
                        }}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  {activeQuestion === question.id ? (
                    <QuestionEditor
                      question={question}
                      onChange={handleQuestionChange}
                    />
                  ) : (
                    <>
                      <p className="font-medium mb-4">
                        {question.question || "Click to edit this question"}
                      </p>
                      <div className="space-y-2">
                        {question.options.map((option, index) => (
                          <div
                            key={index}
                            className="border rounded-md p-3 text-sm"
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}

          {questions.length === 0 && (
            <div className="text-center p-8 border rounded-md bg-muted/20">
              <p className="text-muted-foreground mb-4">
                No questions added yet
              </p>
              <Button onClick={handleAddQuestion}>
                <Plus className="mr-2 h-4 w-4" />
                Add Your First Question
              </Button>
            </div>
          )}
        </div>

        <div>
          <Card>
            <CardContent className="p-4 space-y-6">
              <div>
                <h2 className="text-lg font-medium mb-4">About exam</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="exam-title">Exam title</Label>
                    <Input
                      id="exam-title"
                      value={examDetails.title}
                      onChange={(e) =>
                        setExamDetails({
                          ...examDetails,
                          title: e.target.value,
                        })
                      }
                    />
                  </div>

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
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">
                        Module
                      </div>
                      <Input
                        value={examDetails.module}
                        onChange={(e) =>
                          setExamDetails({
                            ...examDetails,
                            module: e.target.value,
                          })
                        }
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-muted p-2 rounded-md">
                      <Trophy className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">
                        Total marks
                      </div>
                      <Input
                        type="number"
                        value={examDetails.totalMarks}
                        onChange={(e) =>
                          setExamDetails({
                            ...examDetails,
                            totalMarks: Number.parseInt(e.target.value) || 0,
                          })
                        }
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-muted p-2 rounded-md">
                      <Timer className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">
                        Duration (min)
                      </div>
                      <Input
                        type="number"
                        value={examDetails.duration}
                        onChange={(e) =>
                          setExamDetails({
                            ...examDetails,
                            duration: Number.parseInt(e.target.value) || 0,
                          })
                        }
                        className="mt-1"
                      />
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
                  {examDetails.topics.map((topic, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="rounded-md group"
                    >
                      {topic}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-4 w-4 ml-1 rounded-full opacity-0 group-hover:opacity-100"
                        onClick={() => {
                          const newTopics = [...examDetails.topics];
                          newTopics.splice(index, 1);
                          setExamDetails({ ...examDetails, topics: newTopics });
                        }}
                      >
                        <span className="sr-only">Remove</span>×
                      </Button>
                    </Badge>
                  ))}
                  <Badge
                    variant="outline"
                    className="rounded-md bg-muted/50 hover:bg-muted cursor-pointer"
                    onClick={() => {
                      const topic = prompt("Enter new topic:");
                      if (topic && !examDetails.topics.includes(topic)) {
                        setExamDetails({
                          ...examDetails,
                          topics: [...examDetails.topics, topic],
                        });
                      }
                    }}
                  >
                    <Plus className="h-3 w-3 mr-1" /> Add topic
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Publish Confirmation Dialog */}
      <Dialog open={publishDialogOpen} onOpenChange={setPublishDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Publish Exam</DialogTitle>
            <DialogDescription>
              Are you sure you want to publish this exam? Once published, it
              will be available to students.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setPublishDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="bg-emerald-500 hover:bg-emerald-600"
              onClick={confirmPublish}
              disabled={publishing}
            >
              {publishing ? "Publishing..." : "Publish Exam"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
