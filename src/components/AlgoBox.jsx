import React from 'react'

function algoBox(props) {
  return (
    <div className="w-2/3 ml-36">
           <div className="px-20">
           <div className="font-medium border-t-4 border-slate-500 bg-slate-200 rounded-lg py-5 px-6 ml-8 mb-4 text-base text-slate-800" role="alert">
               <div className="font-bold mb-2">{props.name}</div>
               <img src={props.src}/>
            </div>
           </div>
    </div>
  )
}

export default algoBox