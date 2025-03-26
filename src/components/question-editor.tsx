"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { QuestionTypeSelector } from "@/components/question-type-selector";
import { Plus, Trash } from "lucide-react";

interface QuestionOption {
  id: string;
  text: string;
  isCorrect?: boolean;
}

interface Question {
  id: number;
  type: string;
  points: number;
  question: string;
  options: string[] | QuestionOption[];
}

interface QuestionEditorProps {
  question: Question;
  onChange: (updatedQuestion: Question) => void;
}

export function QuestionEditor({ question, onChange }: QuestionEditorProps) {
  const handleQuestionTypeChange = (type: string) => {
    let updatedOptions: string[] = [];

    if (type === "multiple-choice") {
      updatedOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
    } else if (type === "true-false") {
      updatedOptions = ["True", "False"];
    } else if (type === "short-answer" || type === "essay") {
      updatedOptions = [""];
    } else {
      updatedOptions = ["Option 1", "Option 2"];
    }

    onChange({
      ...question,
      type,
      options: updatedOptions,
    });
  };

  const handleAddOption = () => {
    if (
      Array.isArray(question.options) &&
      typeof question.options[0] === "string"
    ) {
      onChange({
        ...question,
        options: [
          ...(question.options as string[]),
          `Option ${question.options.length + 1}`,
        ],
      });
    }
  };

  const handleRemoveOption = (index: number) => {
    if (
      Array.isArray(question.options) &&
      typeof question.options[0] === "string"
    ) {
      const newOptions = [...(question.options as string[])];
      newOptions.splice(index, 1);
      onChange({
        ...question,
        options: newOptions,
      });
    }
  };

  const handleOptionChange = (index: number, value: string) => {
    if (
      Array.isArray(question.options) &&
      typeof question.options[0] === "string"
    ) {
      const newOptions = [...(question.options as string[])];
      newOptions[index] = value;
      onChange({
        ...question,
        options: newOptions,
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Question Type</label>
        <QuestionTypeSelector
          value={question.type.toLowerCase().replace(" ", "-")}
          onChange={handleQuestionTypeChange}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Question</label>
        <Textarea
          value={question.question}
          onChange={(e) => onChange({ ...question, question: e.target.value })}
          placeholder="Enter your question here..."
          className="min-h-[100px]"
        />
      </div>

      {question.type !== "essay" && question.type !== "short-answer" && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Answer Options</label>
            {question.type !== "true-false" && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleAddOption}
              >
                <Plus className="h-4 w-4 mr-1" /> Add Option
              </Button>
            )}
          </div>

          <div className="space-y-2">
            {Array.isArray(question.options) &&
              typeof question.options[0] === "string" &&
              (question.options as string[]).map((option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                    className="flex-1"
                  />
                  {question.type !== "true-false" &&
                    question.options.length > 2 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveOption(index)}
                        className="h-8 w-8"
                      >
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Remove option</span>
                      </Button>
                    )}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
