import React from "react";
import SideNav from "../components/SideNav";
import LogoBanner from "../components/LogoBanner";
import Footer from "../components/Footer";
import AlgoBox from "../components/AlgoBox";
import dc from '../assets/dc.png';
import bc from '../assets/bc.png';
import cc from '../assets/cc.png';
import ec from '../assets/ecc.png';

function Algorithm() {
  return (
    <div className="h-full">
      <div className="flex justify-center p-5 mt-1">
        <LogoBanner />
      </div>

      <div className="flex  ml-10 mr-20">
        <SideNav />
        <div className="w-min-full h-24 w-24 mx-5 px-5">hello</div>
        <div className=" content h-full text-slate-100">
        <div className="w-2/3 ml-36">
           <div className="px-20">
           <div className="font-medium border-t-4 border-orange-500 bg-orange-200 rounded-lg py-5 px-6 ml-8 mb-4 text-base text-yellow-800" role="alert">
               <span>
               Given a protein interaction network G=(V,E) and a protein u∈V, let N be the total number of nodes in the network, Nu be the set of neighbors of node u, and A=a(u,v) be the adjacency matrix of the network. If node u doesn't interact with node v, a(u,v)=0; otherwise, a(u,v)=1. So the formulas of the centrality methods are shown as the following:
               </span>
               </div>
           </div>
           </div>
           <AlgoBox name="Degree Centrality" src={dc}/>
           <AlgoBox name="Betweenness Centrality" src={bc}/>
           <AlgoBox name="Closeness Centrality" src={cc}/>
           <AlgoBox name="Eccentricity Centrality" src={ec}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Algorithm;
