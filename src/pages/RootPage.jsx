import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function RootPage() {
  return (
    <div>
      <NavBar/>
      <Outlet />
    </div>
  );
}
