import React from 'react'

function GradiantButton(props) {
  return (
    <button className='text-slate-900 text-bold mt-10 p-5 rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500' onClick={props.onClick}><strong>{props.name}</strong> </button>
  )
}

export default GradiantButton