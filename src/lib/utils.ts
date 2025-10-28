import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// A stable year value computed once to avoid potential SSR/CSR mismatches
export const CURRENT_YEAR = new Date().getFullYear();