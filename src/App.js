import React from "react";
import "./App.css";
import { ThemeProvider } from "emotion-theming";

import TodoList from "./pages/TodoList";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#e06262",
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoList />;
    </ThemeProvider>
  );
}

export default App;
