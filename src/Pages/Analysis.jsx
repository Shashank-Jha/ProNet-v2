import React from "react";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AnalysisInput from "../components/AnalyzeGraph/AnalysisInput";
import AnalyzePageContent from "../components/AnalyzePageContent";

function Analysis() {
  return (
    <div className="h-full">
      <Header />

      <div className="flex  ml-10 mr-20">
        <SideNav />
        <div className="w-min-full h-24 w-24 mx-5 px-5">hello</div>
        <div className=" content mt-10 h-full text-slate-100">
            <AnalyzePageContent/>
          <AnalysisInput />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Analysis;
