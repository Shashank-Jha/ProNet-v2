import React, { useEffect, useState } from "react";
import ForceGraph3D from "react-force-graph-3d";
import Header from "../Header";
import Footer from "../Footer";
import Table from "../Table";
let tableContent = [];
function AnalyzedGraph() {
  const initialData = {
    nodes: [
      { id: "id1", name: "Dummy data 1", val: 10 },
      { id: "id2", name: "Dummy data 2", val: 9 },
    ],
    links: [{ source: "id1", target: "id2" }],
  };

  const [visGraphData, setVisGraphData] = useState(initialData);

  useEffect(() => {
    const ppiInfoDataString = `9606.ENSP00000000233#$ARF5#$180#$ADP-ribosylation factor 5; GTP-binding protein that functions as an allosteric activator of the cholera toxin catalytic subunit, an ADP- ribosyltransferase. Involved in protein trafficking; may modulate vesicle budding and uncoating within the Golgi apparatus;\n9606.ENSP00000000412#$M6PR#$277#$Cation-dependent mannose-6-phosphate receptor; Transport of phosphorylated lysosomal enzymes from the Golgi complex and the cell surface to lysosomes. Lysosomal enzymes bearing phosphomannosyl residues bind specifically to mannose-6- phosphate receptors in the Golgi apparatus and the resulting receptor-ligand complex is transported to an acidic prelyosomal compartment where the low pH mediates the dissociation of the complex; MRH domain containing \n9606.ENSP00000001008#$FKBP4#$459#$Peptidyl-prolyl cis-trans isomerase FKBP4; Immunophilin protein with PPIase and co-chaperone activities. Component of steroid receptors heterocomplexes through interaction with heat-shock protein 90 (HSP90). May play a role in the intracellular trafficking of heterooligomeric forms of steroid hormone receptors between cytoplasm and nuclear compartments. The isomerase activity controls neuronal growth cones via regulation of TRPC1 channel opening. Acts also as a regulator of microtubule dynamics by inhibiting MAPT/TAU ability to promote microtubule assembly. May have a protective role a [...] \n9606.ENSP00000001146#$CYP26B1#$512#$Cytochrome P450 26B1; Involved in the metabolism of retinoic acid (RA), rendering this classical morphogen inactive through oxidation. Involved in the specific inactivation of all-trans-retinoic acid (all-trans-RA), with a preference for the following substrates: all-trans-RA > 9-cis-RA > 13-cis-RA. Generates several hydroxylated forms of RA, including 4-OH-RA, 4-oxo-RA, and 18-OH- RA. Essential for postnatal survival. Plays a central role in germ cell development: acts by degrading RA in the developing testis, preventing STRA8 expression, thereby leading to delay of meiosis. Required  [...] \n9606.ENSP00000002125#$NDUFAF7#$441#$Protein arginine methyltransferase NDUFAF7, mitochondrial; Arginine methyltransferase involved in the assembly or stability of mitochondrial NADH:ubiquinone oxidoreductase complex (complex I). Acts by mediating symmetric dimethylation of 'Arg-118' of NDUFS2 after it assembles into the complex I, stabilizing the early intermediate complex; Belongs to the NDUFAF7 family\n9606.ENSP00000002165#$FUCA2#$467#$Plasma alpha-L-fucosidase; Alpha-L-fucosidase is responsible for hydrolyzing the alpha-1,6-linked fucose joined to the reducing-end N- acetylglucosamine of the carbohydrate moieties of glycoproteins; Belongs to the glycosyl hydrolase 29 family`;

    const ppiSplitByLine = ppiInfoDataString.split("\n");
    // console.log(ppiSplitByLine.length);

    const ppiArraySplitByTab = [];
    ppiSplitByLine.map((e) => {
      e.split("#$").map((ele) => {
        ppiArraySplitByTab.push(ele);
      });
    });

    console.log(ppiArraySplitByTab);

    let proteinIdSDB = [];
    let proteinName = [];
    let proteinScore = [];
    let proteinDetails = [];

    for (let idx = 0; idx < ppiArraySplitByTab.length; idx++) {
      switch (idx % 4) {
        case 0:
          proteinIdSDB.push(ppiArraySplitByTab[idx]);
          break;
        case 1:
          proteinName.push(ppiArraySplitByTab[idx]);
          break;
        case 2:
          proteinScore.push(ppiArraySplitByTab[idx]);
          break;
        case 3:
          proteinDetails.push(ppiArraySplitByTab[idx]);
          break;
      }
    }

    // console.log(proteinDetails);

    // console.log("This is visNet links",visNetwork.links);

    var centrality = require("ngraph.centrality");
    var graph = require("ngraph.graph")();

    let topNodes = new Set();
    const n = parseInt(JSON.parse(localStorage.getItem("maxTopNode")));
    const pickHighest = (obj, n) => {
      // if(n > Object.keys(obj).length){
      //   alert("please enter value size");
      //   return false;
      // }
      const requiredObj = {};
      Object.keys(obj)
        .sort((a, b) => obj[b] - obj[a])
        .forEach((key, ind) => {
          if (ind < Object.keys(obj).length) {
            requiredObj[key] = obj[key];
          }
        });

      return requiredObj;
    };

    function createMyGraphForAnalysis(linkObj) {
      // console.log("graph creation")
      // console.log("this is the link obj",linkObj);
      for (let idx = 0; idx < linkObj.length; idx++) {
        // console.log("add link format",linkObj[idx].source,linkObj[idx].target);
        graph.addLink(linkObj[idx].source, linkObj[idx].target);
      }
    }

    function getTopNodes(nodeSet, topPairs) {
      Object.keys(topPairs).forEach((key, cent) => {
        nodeSet.add(key);
      });
      console.log(topNodes);
    }

    // {Calulating Degree Centrality}
    function calculateDegreeCentrality(graph) {
      var degreeCentrality = centrality.degree(graph);
      console.log(pickHighest(degreeCentrality, n));
      tableContent.push(pickHighest(degreeCentrality, n));
      getTopNodes(topNodes, pickHighest(degreeCentrality, n));
    }

    function calculateBetweennessCentrality(graph) {
      var betweennessCentrality = centrality.betweenness(graph);
      console.log(pickHighest(betweennessCentrality, n));
      tableContent.push(pickHighest(betweennessCentrality, n));
      getTopNodes(topNodes, pickHighest(betweennessCentrality, n));
    }

    function calculateClosenessCentrality(graph) {
      var closenessCentrality = centrality.closeness(graph);
      console.log(pickHighest(closenessCentrality, n));
      tableContent.push(pickHighest(closenessCentrality, n));
      getTopNodes(topNodes, pickHighest(closenessCentrality, n));
    }

    function calculateEccentricityCentrality(graph) {
      var eccentricityCentrality = centrality.eccentricity(graph);
      console.log(pickHighest(eccentricityCentrality, n));
      tableContent.push(pickHighest(eccentricityCentrality, n));
      getTopNodes(topNodes, pickHighest(eccentricityCentrality, n));
    }

    let centralityAlgoSelected = JSON.parse(
      localStorage.getItem("selectedAlgo")
    );
    let graphData = JSON.parse(localStorage.getItem("dataKey"));

    // console.log("this is links",graphData.links);
    createMyGraphForAnalysis(graphData.links);

    // console.log("yeh local storage se checkbox uthaya hai ",centralityAlgoSelected);

    let centralityCount = [0, 0, 0, 0]; // [Degree, Betweenness, Closeness, Eccentricity]
    for (let idx = 0; idx < centralityAlgoSelected.length; idx++) {
      console.log(centralityAlgoSelected[idx]);
      switch (centralityAlgoSelected[idx]) {
        case "DC":
          centralityCount[0] += 1;
          break;

        case "BC":
          centralityCount[1] += 1;
          break;

        case "CC":
          centralityCount[2] += 1;
          break;

        case "EC":
          centralityCount[3] += 1;
          break;
      }
    }
    // console.log("local se uthake count kiya hai kitne baar checkbox daba",centralityCount);

    for (let idx = 0; idx < centralityCount.length; idx++) {
      centralityCount[idx] %= 2;
    }
    // console.log("agar checkbox odd times h to true else false",centralityCount);

    if (centralityCount[0] === 1) {
      calculateDegreeCentrality(graph);
    }
    if (centralityCount[1] === 1) {
      calculateBetweennessCentrality(graph);
    }
    if (centralityCount[2] === 1) {
      calculateClosenessCentrality(graph);
    }
    if (centralityCount[3] === 1) {
      calculateEccentricityCentrality(graph);
    }
    console.log("this is top nodes", topNodes);
    // converting to JSON : =>
    topNodes = [...topNodes];
    tableContent = topNodes;
    let proteinDataCollection = [];
    for (let i = 0; i < topNodes.length; i++) {
      for (let idx = 0; idx < proteinIdSDB.length; idx++) {
        if (proteinIdSDB[idx] === topNodes[i]) {
          let data = {
            id: proteinIdSDB[idx],
            user: proteinName[idx],
            description: proteinDetails[idx],
          };
          proteinDataCollection.push(data);
        }
      }
    }

    console.log("this is node data", proteinDataCollection);
    // exports = proteinDataCollection;
    let nodes = proteinDataCollection;

    let visNetwork = {
      nodes: nodes,
      links: JSON.parse(localStorage.getItem("dataKey")).links,
    };
    setVisGraphData(visNetwork);
  }, []);

  //  console.log("this is the tableCont",tableContent);

  return (
    <div>
      <Header />
      <div className="flex ">
        <Table data={tableContent} />
        <ForceGraph3D
          height={600}
          width={700}
          graphData={visGraphData}
          nodeId="id"
          linkCurvature={0.1}
          nodeLabel="user"
          nodeAutoColorBy="id"
        />
      </div>

      <Footer />
    </div>
  );
}

export default AnalyzedGraph;
