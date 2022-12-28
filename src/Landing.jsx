import React from "react";
import { Link } from "react-router-dom";
import Graph from "./Graph/Graph";
import dbLogo1 from "./assets/db-logo1.svg";
import dbLogo2 from "./assets/db-logo2.svg";
import dbLogo3 from "./assets/db-logo3.svg";
import GradientButton from "./components/GradiantButton";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import './landing.css';

const Landing = () => {
  return (
    <div className="landing-body max-w-full">
     
     <Header/>
      <article className="grid grid-cols-2 gap-2">
        <div className="p-10 text-slate-100">
          <div className="content pl-20 pt-10 text-left">
            <h1 class="mt-10 mb-10 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-red-600">
              Pronet
            </h1>
            <div>
              A protien-protien based{" "}
              <span className="italic underline">network visualizer</span> and{" "}
              <span className="italic underline">analyser system</span>.
              Supported by popular biological database. Effectively calculates
              influencial nodes using various{" "}
              <span className="italic underline">centrality algorithms</span> in
              realtime.
            </div>

            <Link to="/Home">
              <GradientButton name="Get Started" />
            </Link>
          </div>
        </div>
        <div className="graph ">
          <Graph />
        </div>
      </article>
      <div className="bg-slate-100 p-10 db-logos flex justify-center space-x-80 ">
        <img src={dbLogo1} alt="db-logo1" />
        <img src={dbLogo2} alt="db-logo2" />
        <img src={dbLogo3} alt="db-logo3" />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
