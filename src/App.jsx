import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <>
      <div
        onPointerMove={(e) => {
          setPosition({ x: e.clientX, y: e.clientY });
        }}
        className='gela'
        style={{ position: 'relative' }} 
      >
        <Header />
        <Main />
        <Projects />
        <Footer />
        <div
          style={{
            position: 'fixed',
            width: 50,
            height: 50,
            borderRadius: '50%',
            background: 'transparent', 
            border: '2px solid white',
            transform: 'translate(-50%, -50%)',
            left: `${position.x}px`,
            top: `${position.y}px`,
            pointerEvents: 'none', 
            zIndex: 9999, 
          }}
        ></div>
      </div>
    </>
  );
}

export default App;



