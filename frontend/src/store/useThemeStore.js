import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("hello-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("hello-theme", theme);
    set({ theme });
  },
}));
