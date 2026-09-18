import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Schedule from "./pages/Scheduling/Schedule.jsx";

export default function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/scheduling" element={<Schedule/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}