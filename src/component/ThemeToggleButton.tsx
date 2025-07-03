// src/component/ThemeToggleButton.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeToggleButton: React.FC = () => {
    const [themeMode, setThemeMode] = useState<string>(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme;
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const root = window.document.documentElement;
            if (themeMode === 'dark') {
                root.classList.add('dark');
                // Log to console when dark mode is active
                console.log('Dark mode is now active!');
            } else {
                root.classList.remove('dark');
                // Optional: You could log for light mode too if needed
                // console.log('Light mode is now active!');
            }
            localStorage.setItem('theme', themeMode);
        }
    }, [themeMode]);

    const handleToggle = () => {
        setThemeMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
    };

    return (
        <button
            onClick={handleToggle}
            aria-label="Toggle theme"
            className={`
                p-2 rounded-full transition-colors duration-300
                bg-gray-200 text-gray-800 hover:bg-gray-300
                dark:bg-gray-700 dark:text-yellow-300 dark:hover:bg-gray-600
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-purple-500
                dark:focus:ring-offset-gray-900 focus:ring-offset-white
            `}
        >
            {themeMode === 'dark' ? (
                <SunIcon className="h-6 w-6" />
            ) : (
                <MoonIcon className="h-6 w-6" />
            )}
        </button>
    );
};

export default ThemeToggleButton;