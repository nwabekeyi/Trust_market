import './App.css'
import MyRoutes from "@Routes"
import { MaterialTailwindControllerProvider } from "@context";
import { ThemeProvider } from "@material-tailwind/react";

function App() {

  return (
    <div>
    <ThemeProvider>
      <MaterialTailwindControllerProvider>
        <MyRoutes />
      </MaterialTailwindControllerProvider>
    </ThemeProvider>
    </div>
  )
}

export default App
