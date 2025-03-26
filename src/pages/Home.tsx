import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";


export default function TestSelectionPage() {
  const tests = [
    {
      id: "html",
      name: "HTML test",
    },
    {
      id: "css",
      name: "CSS test",
    },
    {
      id: "js",
      name: "JS test",
    },
    {
      id: "react",
      name: "React test",
    },
    {
      id: "js",
      name: "JS test",
    },
    {
      id: "react",
      name: "React test",
    },
    {
      id: "react",
      name: "React test",
    },
    {
      id: "js",
      name: "JS test",
    },
    {
      id: "react",
      name: "React test",
    },
  ];
 const navigate=useNavigate();
  const handlechange = () => {
    navigate("/exam");
  }
  return (
    <div className="w-ful  flex flex-col  justify-center w-full">
     
      <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b0">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 md:mb-12 dark:text-white">
            Choose the test that suits you.
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6  ">
            {tests.map((test) => (
              <div
                key={test.id}
                className="bg-violet-200 h-[27vh] border-inherit rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center transition-transform hover:scale-105"
              >
                <h2 className="text-xl font-bold text-center mb-4 dark:text-black">
                  {test.name}
                </h2>

                <Button onClick={handlechange}
                  asChild
                  className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8"
                >
                  <Link to={`/test/${test.id}`}>start</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
