import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ModulePage from "./pages/ModulePage";
import Simulation from "./pages/Simulation";
import AISkills from "./pages/AISkills";
import { ProgressProvider } from "./context/ProgressContext";

export default function App() {
    return (
        <ProgressProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/module/:id" element={<ModulePage />} />
                    <Route path="/simulation" element={<Simulation />} />
                    <Route path="/ai-skills" element={<AISkills />} />
                </Routes>
            </BrowserRouter>
        </ProgressProvider>
    );
}