import React from 'react'
import SideNav from '../components/SideNav'
import LogoBanner from '../components/LogoBanner'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='h-full'>
      <div className='flex justify-center p-5 mt-1'><LogoBanner/></div>
      <div className='flex  ml-10 mr-20'>
            <SideNav/>
            <div className='w-min-full h-24 w-24 mx-5 px-5'> 
              hello
            </div>
            <div className=' content h-full text-slate-100'>
            <div className="box1 px-10 py-10">
            <h1 className='text-xl font-bold'>Welcome to Pronet</h1>
           <div className="px-20 py-5">
           <div className="font-medium border-t-4 border-orange-500 bg-orange-200 rounded-lg py-5 px-6 ml-8 mb-4 text-base text-yellow-800" role="alert">
               <span>
               Nearly all cellular-level operations are powered by proteins. A very important class of proteins, essential proteins, are crucial for many biological processes. Essential proteins are those that are necessary for cell growth and survival. The organism cannot survive or grow if one of them is missing.						
Understanding a cell's bare basic requirements can be assisted by the identification of important proteins. Additionally, it can offer theoretical support for exploring the effect of new medicines and figuring out the underlying causes of diseases.						
The identification of essential proteins is crucial for understanding the minimal requirements for cellular life which is also very important for the discovery of human disease genes and defending against human pathogens. For example, the identification of essential genes and non-essential genes is valuable for rational drug design. ProNet is a comprehensive and convenient platform that aids in the study of influential protein prediction and characterisation.

               </span>
            </div>
           </div>
        </div>

        <div className="w-2/3 ml-36">
           <div className="px-20">
           <div className="font-medium border-t-4 border-orange-500 bg-orange-200 rounded-lg py-5 px-6 ml-8 mb-4 text-base text-yellow-800" role="alert">
               <span>
                   NOTICE: Enter or upload a list of identifiers which is a tab-delimited string for each row, for example:
                   <div className="pl-10 font-bold">
                       P35202 &nbsp; P14164
                       <br/>
                       P35202 &nbsp; Q04174
                   </div>
                   Or you can choose a PPI network based on the organism name which you must select firstly in the right column!
               </span>
               </div>
           </div>
           </div>
            </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home