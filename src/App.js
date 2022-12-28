import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Landing";
import Home from "./Pages/Home";
import Algorithm from "./Pages/Algorithm";
import Visualize from "./Pages/Visualize";
import Analysis from "./Pages/Analysis";
import GraphVisualize from "./Pages/GraphVisualize";
import AnalyzedGraph from "./components/AnalyzeGraph/AnalyzedGraph";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/algorithm" element={<Algorithm />} />
          <Route path="/visualise" element={<Visualize />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/GraphVisualize" element={<GraphVisualize />} />
          <Route path="/AnalyzedGraph" element={<AnalyzedGraph />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
