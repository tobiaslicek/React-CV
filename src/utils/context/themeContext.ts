import { createContext } from 'react';

const enum Theme {
  Light = 'light',
  dark = 'dark',
}

type ThemeContextDefault = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeContext = createContext({
  theme: theme.Light,
  setTheme: () => {},
});

export default ThemeContext;
