import React from 'react'
import './Main.css'

const Main = ({show}) => {
 

  return (
    <>

   <div className='bord'>
    <div className='border3'></div>
    </div>

    <div className='grid'>
       {show &&<div className='header-1'>
            <h1 className='lang'>HTML</h1>
            <p className='par'>Year Experience</p>
        </div>}
        {show &&<div className='header-3'>
        <h1 className='lang'>CSS</h1>
            <p className='par'>Year Experience</p>
        </div>}
       { show &&<div className='header-2'>
        <h1 className='lang'>Javascript</h1>
            <p className='par'>Year Experience</p>
        </div>}
        {show &&<div className='header-1'>
        <h1 className='lang'>Accessibility</h1>
            <p className='par'>Year Experience</p>
        </div>}
        {show &&<div className='header-3'>
        <h1 className='lang'>React</h1>
            <p className='par'>Year Experience</p>
        </div>}
        {show &&<div className='header-2'>
        <h1 className='lang'>TailwindCSS</h1>
            <p className='par'>Year Experience</p>
        </div>}
    </div>

   { show &&<div className='bgimg header-2'>
        <img src="/assets/Group 26.svg" alt="" />
    </div>}

    <div className='bord'>
    <div className='border3'></div>
    </div>
    </>
  )
}

export default Main