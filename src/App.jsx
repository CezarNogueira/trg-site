import './App.css';
import React, { useState } from 'react';
import Home from './pages/Home/home';
import Servicos from './pages/Servicos/servicos';
import Sobre from './pages/Sobre/sobre';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  const [nowPage, setNowPage] = useState('home');

  return (
    <div className='App'>
      <header><Header setNowPage={setNowPage}/></header>
      <main>
        {nowPage === 'home' && <Home/>}
        {nowPage === 'servicos' && <Servicos/>}
        {nowPage === 'sobre' && <Sobre/>}
      </main>
      <footer><Footer/></footer>
    </div>
  );
}

export default App