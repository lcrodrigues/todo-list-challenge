import { createContext } from "react";

export type Typography = {
  regular: string;
  bold: string;
  sizes: {
    small: number;
    medium: number;
    large: number;
  };
};

export type Theme = {
  colors: {
    blueDark: string;
    blue: string;
    purpleDark: string;
    purple: string;
    gray700: string;
    gray600: string;
    gray500: string;
    gray400: string;
    gray300: string;
    gray200: string;
    gray100: string;
    danger: string;
  };

  typography: Typography;
};

export const theme: Theme = {
  colors: {
    blueDark: "#1e6f9f",
    blue: "#4ea8de",
    purpleDark: "#5e60ce",
    purple: "#8284fa",
    gray700: "#0d0d0d",
    gray600: "#1a1a1a",
    gray500: "#262626",
    gray400: "#333333",
    gray300: "#808080",
    gray200: "#d9d9d9",
    gray100: "#f2f2f2",
    danger: "#e25858",
  },

  typography: {
    regular: "Inter-Regular",
    bold: "Inter-Bold",
    sizes: {
      small: 12,
      medium: 14,
      large: 16,
    },
  },
};

export const ThemeContext = createContext<Theme>(theme);
