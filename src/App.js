import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Header />

        <main className='main'>
          <Home />
        </main>
            
      </BrowserRouter>
      
    </>
  );
}

export default App;
