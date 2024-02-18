import React from 'react'
import './Projects.css'
const Projects = ({show2}) => {
  return (
    <>

   {show2&&<div className='project'>
       <div className='header-44'>
            <h1 className='isnideproject'>
                Projects
            </h1>
       </div>

       <div className='header-55'>
       <h3 className='contact2'>
                <a href="https://www.linkedin.com/in/giorgi-bachidze-11b68426b/">
                    CONTACT ME
                </a>
            </h3>
            <div className="border4"></div>
       </div>

    </div>}

    <div className='maingrid'>

        {show2 &&<div className='first header-66'>

            <img className='cardimg' src="/assets/cardphoto.jpg" alt="card" />

            <div className='firsttxt'>

                <h1 className='firsth1'>
                Interactive Card
                </h1>

                <div className='languages'>
                    <h5>
                        REACT
                    </h5>
                </div>

            </div>

            <div className='viewproject'>
                <div className='project2'>
                
                        <a href="https://master-card-liart.vercel.app/">VIEW PROJECT</a>

                    <div className='border5'></div>
                </div>
                <div className='code'>
                    
                    <a href="https://github.com/Bachidze/MasterCard">VIEW CODE</a>

                    <div className='border6'></div>
                </div>
            </div>

        </div>}

        {show2&&<div className='second header-77'>

                <img className='cardimg' src="/assets/cof.webp" alt="card" />

                <div className='firsttxt'>

                    <h1 className='firsth1'>
                        Coffeeroasters
                    </h1>

                    <div className='languages languages2'>
                        <h5>
                            HTML
                        </h5>
                        <h5>
                            CSS
                        </h5>
                        <h5>
                            Javascript
                        </h5>
                    </div>

                </div>

                <div className='viewproject'>
                    <div className='project2'>
                    
                            <a href="https://cofferoasters-app.vercel.app/">VIEW PROJECT</a>

                        <div className='border5'></div>
                    </div>
                    <div className='code'>
                        
                        <a href="https://github.com/Bachidze/cofferoastersAPP">VIEW CODE</a>

                        <div className='border6'></div>
                    </div>
                </div>

        </div>}

        {show2&&<div className='third header-66'>

                <img className='cardimg width2' src="/assets/countries.png" alt="card" />

                <div className='firsttxt'>

                    <h1 className='firsth1'>
                        Country-API
                    </h1>

                    <div className='languages languages2'>
                            <h5>
                                React
                            </h5>
                            <h5>
                                Typescitp
                            </h5>
                            <h5>
                                TailwindCSS
                            </h5>
                     </div>

                </div>

                <div className='viewproject'>
                    <div className='project2'>
                    
                            <a href="https://flags-bachidze.vercel.app/">VIEW PROJECT</a>

                        <div className='border5'></div>
                    </div>
                    <div className='code'>
                        
                        <a href="https://github.com/Bachidze/Flags">VIEW CODE</a>

                        <div className='border6'></div>
                    </div>
                </div>

            </div>}

           { show2&&<div className='fourth header-77'>

            <img className='cardimg width2' src="/assets/dddd.jpg" alt="card" />

            <div className='firsttxt'>

                    <h1 className='firsth1'>
                        Password-Generator
                    </h1>

                    <div className='languages'>
                        <h5>
                            REACT
                        </h5>
                    </div>

            </div>

            <div className='viewproject'>
                <div className='project2'>
                
                        <a href="https://password-generator-emt3.vercel.app/">VIEW PROJECT</a>

                    <div className='border5'></div>
                </div>
                <div className='code'>
                    
                    <a href="https://github.com/Bachidze/PasswordGenerator">VIEW CODE</a>

                    <div className='border6'></div>
                </div>
            </div>



        </div>}

       {show2&&<div className='fifth header-66'>

                 <img className='cardimg' src="/assets/count.webp" alt="card" />

            <div className='firsttxt'>

                <h1 className='firsth1'>
                    CountDown-Christmas
                </h1>

                <div className='languages languages2'>
                    <h5>
                        HTML
                    </h5>
                    <h5>
                        CSS
                    </h5>
                    <h5>
                        Javascript
                    </h5>
                </div>

            </div>

            <div className='viewproject'>
                <div className='project2'>
                
                        <a href="https://countdown-chirstmas.vercel.app/">VIEW PROJECT</a>

                    <div className='border5'></div>
                </div>
                <div className='code'>
                    
                    <a href="https://github.com/Bachidze/Countdown-Chirstmas">VIEW CODE</a>

                    <div className='border6'></div>
                </div>
            </div>


        </div>}

        {show2&&<div className='sixth header-77'>

                    <img className='cardimg width2' src="/assets/clockappfront.jpg" alt="card" />

            <div className='firsttxt'>

                <h1 className='firsth1'>
                    Clock-App-IP
                </h1>

                <div className='languages languages2'>
                    <h5>
                        REACT
                    </h5>
                    <h5>
                        Typescript
                    </h5>
                    <h5>
                        Tailwind
                    </h5>
                </div>

            </div>

            <div className='viewproject'>
                <div className='project2'>
                
                        <a href="https://clock-axios-app.vercel.app/">VIEW PROJECT</a>

                    <div className='border5'></div>
                </div>
                <div className='code'>
                    
                    <a href="https://github.com/Bachidze/Clock-Axios-App">VIEW CODE</a>

                    <div className='border6'></div>
                </div>
            </div>

        </div>}

      

    </div>
    </>
  )
}

export default Projects