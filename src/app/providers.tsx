// src/app/providers.tsx
"use client"; // Harus menjadi Client Component

import { ReactNode } from 'react';

interface AppProvidersProps {
    children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
    return (
        <>
            {children}
        </>
    );
}