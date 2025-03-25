import "./App.css";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
