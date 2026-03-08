import { createContext, useContext, useState } from "react";

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
    const [completed, setCompleted] = useState(new Set());

    const markComplete = (moduleId) => {
        setCompleted((prev) => new Set([...prev, moduleId]));
    };

    const resetProgress = () => setCompleted(new Set());

    return (
        <ProgressContext.Provider value={{ completed, markComplete, resetProgress }}>
            {children}
        </ProgressContext.Provider>
    );
}

export function useProgress() {
    return useContext(ProgressContext);
}