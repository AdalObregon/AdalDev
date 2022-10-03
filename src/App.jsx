import { useState } from 'react';
import Skills from './components/Skills';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={darkMode ? 'dark' : ''}>
        <div className='dark:bg-slate-800'>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero />
          <Skills />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
