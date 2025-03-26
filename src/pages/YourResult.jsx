import { BarChart, Trophy, Lightbulb, Target } from "lucide-react";

export default function YourResult() {
  const score = 70;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-purple-500 flex items-center justify-center p-4">
      <div className="dark:bg-black  bg-white rounded-xl shadow-lg max-w-3xl w-full p-6 md:p-8">
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-md aspect-square mb-6">
                      <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <img
                  src="https://previews.123rf.com/images/atlasfoto/atlasfoto2003/atlasfoto200300580/142050038-inscription-exam-results-and-stationary-on-wooden-background-top-view.jpg"
                  alt="Character with trophy"
                  width="300"
                  height="300"
                  className="object-contain"
                />

                {/* Connected icons */}
                <div className="absolute -top-16 -left-16 bg-purple-100 p-3 rounded-full">
                  <BarChart className="w-6 h-6 text-purple-600" />
                </div>
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-purple-100 p-3 rounded-full">
                  <Trophy className="w-6 h-6 text-purple-600" />
                </div>
                <div className="absolute -top-16 -right-16 bg-purple-100 p-3 rounded-full">
                  <Lightbulb className="w-6 h-6 text-purple-600" />
                </div>
                <div className="absolute top-1/2 -left-20 -translate-y-1/2 bg-purple-100 p-3 rounded-full">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>

                {/* Number 1 badge */}
                <div className="absolute -left-24 bottom-8">
                  <div className="bg-purple-400 rounded-full w-14 h-14 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">#1</span>
                  </div>
                  <div className="bg-purple-400 w-2 h-10 mx-auto -mt-1"></div>
                  <div className="bg-purple-400 w-8 h-2 mx-auto rounded-full"></div>
                </div>
                <div className="absolute bottom-0 right-0 flex items-end">
                  <div className="w-12 h-20 bg-purple-500 flex items-center justify-center text-white font-bold rounded-t-md">
                    1
                  </div>
                  <div className="w-12 h-12 bg-purple-400 flex items-center justify-center text-white font-bold rounded-t-md ml-1">
                    2
                  </div>
                  <div className="w-12 h-16 bg-purple-300 flex items-center justify-center text-white font-bold  ml-1">
                    3
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="dark:text-white text-2xl md:text-3xl font-bold text-gray-800 text-center rounded-full p-2 ">
            Your grade is {score}% success
          </h1>
        </div>
      </div>
    </div>
  );
}
