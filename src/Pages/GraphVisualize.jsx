import React from 'react'
import CustomGraph from '../components/VisualizeCustomGraph/CustomGraph'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function GraphVisualize() {
  return (
    <>
    <Header/>
    <Link to="/" className="mt-2 pt-2 text-slate-100">⬅ Return </Link>
    <CustomGraph/>
    </>
  )
}

export default GraphVisualize