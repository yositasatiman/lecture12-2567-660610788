"use client";
import Controller from "@components/Controller";
import { Detail } from "@components/Detail";
import { Header } from "@components/Header";

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

  const setLightTheme = () => {};
  const setDarkTheme = () => {};
  const toggleTheme = () => {};

  return (
    <div>
      <Header />
      <Detail />
      <Controller />
    </div>
  );
}
