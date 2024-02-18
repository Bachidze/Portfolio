import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 1) {
        setShow(true);
      } else {
        setShow(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);

      
    };
  }, []);
  

  useEffect(() => {
    function handleScroll2() {
      if (window.scrollY >= 300) {
        setShow2(true);
      } else {
        setShow2(false);
      }
    }

    window.addEventListener('scroll', handleScroll2);
    return () => {
      window.removeEventListener('scroll', handleScroll2);

      
    };
  }, []);
  useEffect(() => {
    function handleScroll3() {
      if (window.scrollY >= 1700) {
        setShow3(true);
      } else {
        setShow3(false);
      }
    }

    window.addEventListener('scroll', handleScroll3);
    return () => {
      window.removeEventListener('scroll', handleScroll3);

      
    };
  }, []);
  return (
    <>
      <div
        onPointerMove={(e) => {
          setPosition({ x: e.clientX, y: e.clientY });
        }}
        className='gela'
        style={{ position: 'relative' }} 
      >
        <Header/>
        <Main 
        show={show}
        />
        <Projects 
        show2={show2}
        />
        <Footer 
        show3={show3}
        />
        <div
          style={{
            position: 'fixed',
            width: 50,
            height: 50,
            borderRadius: '50%',
            background: 'transparent', 
            border: '2px solid purple',
            transform: 'translate(-50%, -50%)',
            left: `${position.x}px`,
            top: `${position.y}px`,
            pointerEvents: 'none', 
            zIndex: 9999, 
            transition:'0.1s'
          }}
        ></div>
      </div>
    </>
  );
}

export default App;



