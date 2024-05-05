import './App.css'
import MyRoutes from './components/Routes'
import { MaterialTailwindControllerProvider } from "./context";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <>
    <ThemeProvider>
      <MaterialTailwindControllerProvider>
        <MyRoutes />
      </MaterialTailwindControllerProvider>
    </ThemeProvider>
    </>
  )
}

export default App
