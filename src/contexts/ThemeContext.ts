import { createContext } from "react";

export interface ThemeItem {
    them : {
        name: string;
        bgColor: string;
        fgColor: string;
    }
}

export const ThemeContext = createContext<any | undefined>(undefined);
