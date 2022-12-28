import React from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="fixed flex flex-col justify-center text-slate-900 text-bold mt-10 mb-10 p-5 rounded bg-slate-100">
      <Link to="/home">
        <button className="flex items-center m-2 p-5 bg-slate-100 rounded border-b-4">
          <span class="material-symbols-outlined">home</span>
          <span className="pl-1">Home</span>
        </button>
      </Link>
      <Link to="/algorithm">
        <button className="flex items-center m-2 p-5 bg-slate-100 rounded border-b-4">
          <span class="material-symbols-outlined">insights</span>
          <span className="pl-1">Algorithm</span>
        </button>
      </Link>
      <Link to="/visualise">
        <button className="flex items-center m-2 p-5 bg-slate-100 rounded border-b-4">
          <span class="material-symbols-outlined">hub</span>
          <span className="pl-1">Visualize</span>
        </button>
      </Link>
      <Link to="/analysis">
        <button className="flex items-center m-2 p-5 bg-slate-100 rounded border-b-4">
          <span class="material-symbols-outlined">analytics</span>
          <span className="pl-1">Analyze</span>
        </button>
      </Link>
    </div>
  );
}

export default SideNav;
