"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  particleDensity: number;
}

interface ThemeContextType {
  theme: ThemeConfig;
  updateTheme: (newTheme: Partial<ThemeConfig>) => void;
}

const defaultTheme: ThemeConfig = {
  primaryColor: "#a855f7", // Purple 500
  secondaryColor: "#ec4899", // Pink 500
  fontFamily: "Inter, sans-serif",
  particleDensity: 50,
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeConfig>(defaultTheme);

  useEffect(() => {
    const saved = localStorage.getItem("shroom-theme");
    if (saved) {
      setTheme(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("shroom-theme", JSON.stringify(theme));
    document.documentElement.style.setProperty(
      "--color-primary",
      theme.primaryColor,
    );
    document.documentElement.style.setProperty(
      "--color-secondary",
      theme.secondaryColor,
    );
    document.documentElement.style.setProperty(
      "--font-family",
      theme.fontFamily,
    );
  }, [theme]);

  const updateTheme = (newTheme: Partial<ThemeConfig>) => {
    setTheme((prev) => ({ ...prev, ...newTheme }));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
