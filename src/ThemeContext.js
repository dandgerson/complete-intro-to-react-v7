import { createContext, useContext } from "react";

// const [theme, setTheme] = useState('darkblue')

// just mimicing useState hook
const ThemeContext = createContext(["brown", () => {}]);

export default ThemeContext;

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);

  return theme;
};
