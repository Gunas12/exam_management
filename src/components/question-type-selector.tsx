"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const questionTypes = [
  { value: "multiple-choice", label: "Multiple choice" },
  { value: "true-false", label: "True / False" },
  { value: "short-answer", label: "Short answer" },
  { value: "essay", label: "Essay" },
  { value: "matching", label: "Matching" },
  { value: "fill-in-blank", label: "Fill in the blank" },
];

interface QuestionTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function QuestionTypeSelector({
  value,
  onChange,
}: QuestionTypeSelectorProps) {
  const [open, setOpen] = React.useState(false);

  const currentType =
    questionTypes.find((type) => type.value === value)?.label ||
    "Select question type";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {currentType}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-white">
        <Command>
          <CommandInput placeholder="Search question type..." />
          <CommandList>
            <CommandEmpty>No question type found.</CommandEmpty>
            <CommandGroup>
              {questionTypes.map((type) => (
                <CommandItem
                  key={type.value}
                  value={type.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === type.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {type.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
