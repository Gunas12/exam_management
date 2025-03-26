import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const ChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
<<<<<<< HEAD
    <Button variant="outline" size="icon" onClick={ChangeTheme}>
      {theme === "light" ? (
=======
    <Button
      variant="outline"
      size="icon"
      onClick={ChangeTheme}
      className=" h-10 w-10 rounded-full border border-gray-500"
    >
      {theme === "dark" ? (
>>>>>>> 1c0080153c4652dcf1099744c5499bd76ab41c0f
        <Sun className="h-[1.2rem] w-[1.2rem]  transition-all " />
      ) : (
        <Moon className="absolute h-[1.2rem] w-[1.2rem]  transition-all " />
      )}

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
