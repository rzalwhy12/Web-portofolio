// src/component/ThemeToggleButton.tsx
"use client";

import React, { useContext } from 'react';
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Button } from './ui/button';

function ThemeToggleButton() {
    // use context
    const { modeContext, setModeContext } = useContext(ThemeContext);
    return (
        <Button
            variant="ghost"
            className="cursor-pointer"
            size="icon"
            onClick={() => {
                setModeContext(modeContext === "light" ? "dark" : "light");
                document.body.classList.toggle("dark");
            }}
        >
            {modeContext === "dark" ? (
                <Sun size={24} color="white" />
            ) : (
                <Moon size={24} color="white" />
            )}
        </Button>
    );
}

export default ThemeToggleButton;