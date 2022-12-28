import React from 'react'

function Table(props) {
    console.log(props.data);
  return (
    <>
    
    <div className="w-2/3 ml-52 mt-10 ">
           <div className="px-20">
           
           <div className="font-medium border-t-4 border-orange-500 bg-orange-200 rounded-lg py-5 px-6 ml-8 mb-4 text-base text-yellow-800" role="alert">
                    <h1>Most Influential Nodes ➡</h1>
                    <div className="form-control flex flex-col checkbox-container">
                       {props.data.map((item)=>(
                           <div className="flex flex-col rounded font-bold bg-orange-300 m-5 p-2">
                           <label className="label cursor-pointer">

                           <span className="label-text checkbox-text p-2 m-3 ">{item}</span>
                           </label>
                           </div>
                       ))}  
                       {props.dataContent}
                   </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Table