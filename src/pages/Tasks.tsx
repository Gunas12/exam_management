import "../css/Tasks.css"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface Question {
  id: string
  text: string
  options: string[]
}

export default function Tasks() {


  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [markedQuestions, setMarkedQuestions] = useState<number[]>([0])
  const [timer, setTimer] = useState("00:00")

  const questions: Question[] = [
    {
      id: "question1",
      text: "What is the main purpose of developing Front-end interfaces?",
      options: [
        "Improve server performance.",
        "Design interactive and attractive user interfaces.",
        "Speed up databases.",
        "Reduce the number of API requests.",
      ],
    },
    {
      id: "question2",
      text: "Question2",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    },
    {
      id: "question3",
      text: "Question3",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    },
  ]

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleSubmit = () => {
    alert("Quiz submitted!")
  }

  const handleAnswerChange = (value: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: value,
    })
  }

  const progress = Math.round(((currentQuestion + 1) / questions.length) * 100)

  return (
    <div className="flex min-h-screen bg-purple-600 p-4 md:p-8">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-4">
        <div className="bg-white rounded-lg p-6 flex-1 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-gray-700 font-medium">Session1 Test</h2>
              <div className="w-full mt-2 bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                <span className="text-xs text-purple-600 font-medium">{progress}%</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-purple-100 px-3 py-1 rounded-full">
              <Clock className="h-4 w-4 text-purple-500" />
              <span className="text-gray-500">{timer} Min</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-gray-500 mb-2">Question{currentQuestion + 1}</h3>
            <p className="text-gray-800 font-medium text-lg mb-6">{questions[currentQuestion].text}</p>

            <RadioGroup
              value={selectedAnswers[currentQuestion] || ""}
              onValueChange={handleAnswerChange}
              className="space-y-3"
            >
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-4 flex items-center justify-between ${
                    selectedAnswers[currentQuestion] === option ? "border-purple-600 bg-purple-50" : "border-gray-200"
                  }`}
                >
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-gray-600">
                    {option}
                  </Label>
                  <RadioGroupItem
                    id={`option-${index}`}
                    value={option}
                    className={selectedAnswers[currentQuestion] === option ? "text-purple-600" : ""}
                  />
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="flex justify-between">
            <Button onClick={handlePrevious} className="flex items-center gap-3 rounded-full px-3 bg-purple-600 hover:bg-purple-700  text-white ml-6">
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button  onClick={handleNext} className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2 rounded-full px-6  text-white">
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button onClick={handleSubmit} className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8">
              Submit
            </Button>
          </div>
        </div>
      
<div className="bg-white rounded-lg p-6 w-full md:w-64 shadow-lg">
  <h3 className="text-gray-600 font-medium mb-4">Questions</h3>
  <div className="space-y-4">
    {questions.map((question, index) => (
      <button
        key={question.id}
        className={`text-gray-600 hover:text-purple-600 block ${
          currentQuestion === index ? "font-bold text-purple-600" : ""
        }`}
        onClick={() => setCurrentQuestion(index)}
      >
        Question {index + 1}
      </button>
    ))}
  </div>
</div>

      </div>
    </div>
  )
}

