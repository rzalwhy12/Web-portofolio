// src/components/ThemeToggleButton.tsx
"use client";

import React, { useContext } from 'react';
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Button } from './ui/button';

function ThemeToggleButton() {
    const { modeContext, setModeContext } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newMode = modeContext === "light" ? "dark" : "light";
        setModeContext(newMode);
        document.documentElement.classList.toggle("dark", newMode === "dark"); // Gunakan document.documentElement untuk Tailwind CSS
    };

    return (
        <Button
            variant="ghost"
            // Tambahkan kelas untuk efek minimalis, transisi, dan rotasi
            className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-full
                        transition-colors duration-300 ease-in-out
                        hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme" // Tambahkan aksesibilitas
        >
            {/* Ikon untuk mode gelap (bulan) - akan muncul saat tema terang */}
            <Moon
                size={24}
                // Atur warna ikon berdasarkan mode
                className={`absolute transition-all duration-500 ease-in-out
                            ${modeContext === "light" ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}
                            text-gray-800 dark:text-gray-300`} // Warna di light/dark mode
            />

            {/* Ikon untuk mode terang (matahari) - akan muncul saat tema gelap */}
            <Sun
                size={24}
                // Atur warna ikon berdasarkan mode
                className={`absolute transition-all duration-500 ease-in-out
                            ${modeContext === "dark" ? "rotate-0 opacity-100" : "rotate-90 opacity-0"}
                            text-gray-800 dark:text-gray-300`} // Warna di light/dark mode
            />
        </Button>
    );
}

export default ThemeToggleButton;