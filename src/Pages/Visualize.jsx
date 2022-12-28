import React from "react";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";
import InputBox from "../components/VisualizeCustomGraph/InputBox";
import Header from "../components/Header";

function Visualize() {
  return (
    <div className="h-full">
      <Header/>

      <div className="flex  ml-10 mr-20">
        <SideNav />
        <div className="w-min-full h-24 w-24 mx-5 px-5">hello</div>
        <div className=" content h-full text-slate-100">
            <InputBox/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Visualize;
