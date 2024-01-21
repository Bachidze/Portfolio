import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <>

    <div className='bord'>
    <div className='border3'></div>
    </div>

    <div className='grid'>
        <div>
            <h1 className='lang'>HTML</h1>
            <p className='par'>Year Experience</p>
        </div>
        <div>
        <h1 className='lang'>CSS</h1>
            <p className='par'>Year Experience</p>
        </div>
        <div>
        <h1 className='lang'>Javascript</h1>
            <p className='par'>Year Experience</p>
        </div>
        <div>
        <h1 className='lang'>Accessibility</h1>
            <p className='par'>Year Experience</p>
        </div>
        <div>
        <h1 className='lang'>React</h1>
            <p className='par'>Year Experience</p>
        </div>
        <div>
        <h1 className='lang'>Sass</h1>
            <p className='par'>Year Experience</p>
        </div>
    </div>

    <div className='bgimg'>
        <img src="/assets/Group 26.svg" alt="" />
    </div>

    <div className='bord'>
    <div className='border3'></div>
    </div>
    </>
  )
}

export default Main