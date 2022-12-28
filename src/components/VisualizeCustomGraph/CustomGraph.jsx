import React,{useEffect,useState} from "react";
// import {useLocation} from 'react-router-dom'
import ForceGraph3D from "react-force-graph-3d";
// import test from "../Graph/block.json";

const initialData = {
  nodes: [ { id: "id1", name: "Dummy data 1", val: 10, },
             { id: "id2", name: "Dummy data 2", val: 9, }, ],
  links: [ { source: "id1", target: "id2"  },],
};


const CustomGraph = ()=>{
//     const { state } = useLocation(); 
//     const { graphObjData } = state;
// console.log(graphObjData) 
  const [graphData, setGraphData] = useState(initialData);
  useEffect(() => {
    let test = localStorage.getItem("dataKey");

    setGraphData(JSON.parse(test));
  }, []);
    return (
      <div>
        <ForceGraph3D
          graphData={graphData}
          nodeId="id"
          linkCurvature={0.1}
          nodeLabel="user"
          nodeAutoColorBy="group"
        />
      </div>
    );
}

export default CustomGraph;
