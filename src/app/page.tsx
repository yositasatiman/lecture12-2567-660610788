"use client";
import Controller from "@components/Controller";
import { Detail } from "@components/Detail";
import { Header } from "@components/Header";
import { useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Home() {
  const THEMES = {
    LIGHT: {
      name: "light",
      bgColor: "white",
      fgColor: "black",
    },
    DARK: {
      name: "dark",
      bgColor: "black",
      fgColor: "white",
    },
  };
  const [theme, setTheme] = useState(THEMES.DARK);

  const setLightTheme = () => {setTheme(THEMES.LIGHT); };
  const setDarkTheme = () => {setTheme(THEMES.DARK); };
  const toggleTheme = () => {
    setTheme(theme.name === THEMES.LIGHT.name? THEMES.DARK : THEMES.LIGHT);
  };

  return (
    <div style = {{backgroundColor: theme.bgColor , minHeight: "100vh"}}>
      <ThemeContext.Provider value={{theme , setLightTheme,setDarkTheme,toggleTheme}} >
        <Header />
        <Detail />
        <Controller />
      </ThemeContext.Provider>
    </div>
  );
}
