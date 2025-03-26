import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const ChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <Button variant="outline" size="icon" onClick={ChangeTheme}>
      {theme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]  transition-all " />
      ) : (
        <Moon className="absolute h-[1.2rem] w-[1.2rem]  transition-all " />
      )}

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
