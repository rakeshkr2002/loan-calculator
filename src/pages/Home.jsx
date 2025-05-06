import React from "react";
import Nav from "../components/Nav";
import Dashboard from "../components/Dashboard";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Nav />
      <Outlet/>
    </div>
  );
};

export default Home;
