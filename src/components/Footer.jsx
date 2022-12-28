import React from 'react'
import LogoBanner from './LogoBanner'


function Footer() {
  return (
    <footer className="text-slate-100 mt-1 p-1">
            <div>
              <div className="scale-50 flex justify-center">
                {" "}
                <LogoBanner />{" "}
              </div>
              <div className="scale-75 font-extralight ">
                Pronet is a platform developed using the concepts of Social Network
                analysis with data science to analyse and visualise Protien-Protien
                Interaction Networks.
              </div>
              
            </div>
            <div className="copyright m-5 font-light">@copyright Pronet 2022</div>
    </footer>
  )
}

export default Footer