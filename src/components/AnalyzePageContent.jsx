import React from 'react'

function AnalyzePageContent() {
  return (
    <div>
        <div className="w-2/3 ml-36">
           <div className="px-20">
           <div className="font-medium border-t-4 border-orange-500 bg-orange-200 rounded-lg py-5 px-6 ml-8 mb-4 text-base text-yellow-800" role="alert">
               <h2>Welcome to ProNet Analyzer !</h2>
               <div>This Analyzer allows the user to input there custom graph data of source and target node in the format mentioned below.
                The given PPI Network is analyzed using the network is runs through the selected algorithms and shows the network of TOP 10 most influential Nodes on the basis of various calculations.
               </div>
               </div>
           </div>
           </div>
    </div>
  )
}

export default AnalyzePageContent