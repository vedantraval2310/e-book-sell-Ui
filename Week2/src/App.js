import { ThemeProvider } from "@material-ui/core";
import "./App.css";
import "./assets/css/style.css";
import { theme } from "./utils/theme";
import Register from "./pages/register";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
};
