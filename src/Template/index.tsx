import { Outlet } from "react-router-dom";
import { Navbar } from "./Components/Navbar";

export function Template() {
  return (
    <>
        <Navbar/>
        <Outlet />
    </>
  )
}
