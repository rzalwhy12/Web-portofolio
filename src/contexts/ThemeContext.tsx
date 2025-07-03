"use client";

import React, { createContext, ReactNode, useState, useEffect } from "react";

type ThemeMode = "light" | "dark";

interface IThemeContext {
    modeContext: ThemeMode;
    setModeContext: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<IThemeContext>({
    modeContext: "light",
    setModeContext: () => { },
});

interface IThemeProviderProps {
    children: ReactNode;
}

function ThemeProvider(props: IThemeProviderProps) {
    const [mode, setMode] = useState<ThemeMode>(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'light' || savedTheme === 'dark') {
                return savedTheme as ThemeMode;
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (mode === "dark") {
            root.classList.add("dark");
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove("dark");
            localStorage.setItem('theme', 'light');
        }
    }, [mode]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem('theme')) {
                setMode(e.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <ThemeContext.Provider value={{ modeContext: mode, setModeContext: setMode }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;