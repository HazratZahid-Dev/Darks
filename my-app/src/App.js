import React, { useState } from 'react'


import './index.css'

function App() {

  const [theme, setTheme] = useState('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className="app" data-theme={theme}>
        <div className='theme-toggle'>
          <button type='button' onClick={switchTheme} >zahid</button>
        </div>
      </div>
    
  );
}

export default App;
