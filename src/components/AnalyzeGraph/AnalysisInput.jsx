import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import GradiantButton from '../GradiantButton';
 

export default function AnalysisInput() {

    useEffect(() => {
        localStorage.clear();
        // setInputValue("");
      }, []);

    // let [graphObj,setGraphObj] = useState({});
    const navigate=useNavigate()
   // Checkbox
   const centralityAlgo = ['DC','BC','CC','EC']
    
   let selectedAlgo = []
   const handleChange = (e) => {
       const checkedID = e.target.id;
       console.log(checkedID);
       selectedAlgo.push(checkedID);
   }
 
   // Textbox
   const [inputValue, setInputValue] = useState("");
   const [topNodeValue, setTopNodeValue] = useState("");
   const onChangeHandler = (event) => {
       setInputValue(event.target.value);
      
   };
   const onTopNodeTextBoxChange = (event) =>{
    setTopNodeValue(event.target.value);
   }
 
   const handleSubmit = () => {
       var inputNodes = cleanInputData(inputValue);
    //    console.log(inputNodes);
    //    for(let i=0;i<inputNodes.length;i++){
    //        let [src,dest] = inputNodes[i].split(' ');
    //        console.log(`src : ${src}`);
    //        console.log( `dest : ${dest}`);
    //    }
    let graphObjData = createLinkObjArray(inputNodes);
    console.log();
    // const graphJSON = JSON.stringify();
    // setGraphObj(graphObjData);
    //save in local storage 
    localStorage.setItem('dataKey', JSON.stringify(graphObjData));
    localStorage.setItem('selectedAlgo', JSON.stringify(selectedAlgo));
    localStorage.setItem('maxTopNode',JSON.stringify(topNodeValue));
    navigate("/AnalyzedGraph");
   }
 
   function cleanInputData(input){
       input = input.trim();
       var inputNodes = input.split("\n");
       var allNodes = [];
       for(let i=0;i<inputNodes.length;i++){
           var data = inputNodes[i].replace(/  +/g, ' ');
           allNodes.push(data);
       }
       return allNodes;
   }
 
   const showFile = async (e) => {
       e.preventDefault()
       const reader = new FileReader()
       reader.onload = async (e) => {
         const text = (e.target.result)
         console.log(text)
         alert(text)
       };
       reader.readAsText(e.target.files[0])
     }
 
   return (
       <>
       <Link to="/"><button className='btn-home'>⬅ Home</button></Link>
       <div className="outside-box  text-left">
           {/* input box */}
           <div className="first-box flex flex-col text-left justify-center">
               {/* <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                   <div className="form-control w-full max-w-xs">
                       <label className="label">
                           <span className="label-text">JobID</span>
                       </label>
                       <input type="text" placeholder="please input your jobID" className="input input-accent w-full max-w-xs"/>
                   </div>
               </div> */}
 
               {/* checkbox */}
               <div className="flex w-full flex-col component-preview p-4 items-center justify-center gap-2 font-sans">       
               <label className="label">
                           <h1 className="label-text font-bold m-4 border p-2 rounded">Centrality Algorithms</h1>
                       </label>
                   <div className="form-control flex flex-row checkbox-container">
                       {centralityAlgo.map((item)=>(
                           <div className="flex flex-row rounded font-bold bg-slate-500 m-5 p-2">
                           <label className="label cursor-pointer">
                           <input type="checkbox" className="checkbox checkbox-xs " id={item} onChange={handleChange}/>
                           <span className="label-text checkbox-text p-2 m-3 ">{item}</span>
                           </label>
                           </div>
                       ))}  
                   </div>
               </div>
 
               {/* textbox */}
               <div className="flex flex-col w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                   <div className="form-control w-full max-w-xs">
                   <label className="label font-bold flex items-left pb-2">
                           <span className="label-text">Input Data</span>
                       </label>
                       <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a list of identifiers" onChange={onChangeHandler} value={inputValue}></textarea>
                   </div>
                   {/* <div className="form-control w-full max-w-xs">
                   <label className="label font-bold flex items-left pb-2">
                           <span className="label-text">Max Top Nodes:</span>
                       </label>
                       <input className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Not More than 10" onChange={onTopNodeTextBoxChange} value={topNodeValue}></input>
                   </div> */}
               </div>
 
               <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                   <div className="form-control w-full max-w-xs">
                       <label className="label">
                           <span className="label-text"><strong>OR</strong> Upload your own file</span>
                       </label>
                       <input type="file" onChange={(e) => showFile(e)} />
                       <GradiantButton name="Submit" onClick={handleSubmit}/>
                   </div>
               </div>
           </div>
 
       {/* Notice */}
       <div className="w-2/3 ml-36">
           <div className="px-20">
           <div className="font-medium border-t-4 border-orange-500 bg-orange-200 rounded-lg py-5 px-6 ml-8 mb-4 text-base text-yellow-800" role="alert">
               <span>
                   NOTICE: Enter or upload a list of identifiers which is a tab-delimited string for each row, for example:
                   <div className="pl-10 font-bold">
                   9606.ENSP00000000233 &nbsp; 9606.ENSP00000000412
                   9606.ENSP00000000412 &nbsp; 9606.ENSP00000001008
                   9606.ENSP00000001008 &nbsp; 9606.ENSP00000002125
                   9606.ENSP00000002125 &nbsp; 9606.ENSP00000002165
                   </div>
                   Or you can choose a PPI network based on the organism name which you must select firstly in the right column!
               </span>
               </div>
           </div>
           </div>
       </div>
       </>
     )
}

// DATA ANALYSIS
let links = [];
function createLinkObjArray(inputNodes){
    for(let i=0;i<inputNodes.length;i++){
        let [src,dest] = inputNodes[i].split(' ');
        links.push({"source":src,"target":dest});
    }
    let networkObj = {
        "nodes" : nodes,
        "links" : links
    };
    return networkObj;
}

// let nodes = proteinDataCollection;

let nodes = [
    {"id":"P35202",
     "user":"GPC1_HUMAN",
     "description":"Cell surface proteoglycan that bears heparan sulfate. Binds, via the heparan sulfate side chains, alpha-4 (V) collagen and participates in Schwann cell myelination (By similarity). May act as a catalyst in increasing the rate of conversion of prion protein PRPN(C) to PRNP(Sc) via associating (via the heparan sulfate side chains) with both forms of PRPN, targeting them to lipid rafts and facilitating their interaction. Required for proper skeletal muscle differentiation by sequestering FGF2 in lipid rafts preventing its binding to receptors (FGFRs) and inhibiting the FGF-mediated signaling"
    },
     {
     "id":"P14164",
     "user":"ABF1_YEAST",
     "description":"General regulatory factor (GRF) that contributes to transcriptional activation of a large number of genes, as well as to DNA replication, silencing and telomere structure. Involved in the transcription activation of a subset of ribosomal protein genes. Binds the ARS-elements found in many promoters. Binds to the sequence 5'-TCN7ACG-3'. Influences on genome-wide nucleosome occupancy and affects chromatin structure, and probably dynamics. As a component of the global genome repair (GGR) complex, promotes global genome nucleotide excision repair (GG-NER) which removes DNA damage from nontranscribing DNA. Component of the regulatory network controlling mitotic and meiotic cell cycle progression."
    },{
      "id":"Q04174",
     "user":"SMP3_YEAST",
     "description":"Alpha-1,2-mannosyltransferase involved in glycosylphosphatidylinositol-anchor biosynthesis. Transfers a fourth mannose to trimannosyl-GPIs during GPI precursor assembly. The presence of a fourth mannose in GPI is essential in fungi. Involved in plasmid maintenance with SMP2."
    }
]
