import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './style.css';

import Navbar from './components/Navbar';
import Main from './components/MainContent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
