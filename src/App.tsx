import "./App.css";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";
import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar.tsx";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
