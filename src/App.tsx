import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextType | null>(null);

function App() {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='app' id={theme}>
        <Home />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
