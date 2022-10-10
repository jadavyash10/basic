import React from "react";
import { Routes } from "react-router-dom";
import { mapRoute } from "../routes/Index";
import { Arr } from "../components/route";
import Navbar from "../components/navigation/Navbar";

const Home = () => {
  return (
    <>
      {/* <Useroutes/> */}
      
        <Navbar />
        <br />
        <Routes>{mapRoute(Arr)}</Routes>
    </>
  );
};

export default Home;
