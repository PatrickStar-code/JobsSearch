import { Route, Routes } from "react-router-dom";
import { Template } from "..";
import { Home } from "../../Pages/Client/Home";
import { Jobs } from "../../Pages/Client/Jobs";
import { About } from "../../Pages/Client/About";
import Contact from "../../Pages/Client/Contact";

export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Template />}>
            <Route path={"/"} element={<Home/>}/>
            <Route path="/jobs" element={<Jobs/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Route>
    </Routes>
  )
}
