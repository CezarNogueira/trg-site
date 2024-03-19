import React from 'react';
import './Header_module.css'

function Header ({ setNowPage }) {
    return (
        <header className='header'>
                <div className='conteiner-logo'>
                    <div className="logo-imagem">
                        <img className="logo" src="../../public/Ananery.svg" alt="Logo" />
                    </div>
                </div>
            <nav className='menu'>
                <li onClick={() => setNowPage('home')}><a>Home</a></li>
                <li onClick={() => setNowPage('servicos')}><a>Serviços</a></li>
                <li onClick={() => setNowPage('sobre')}><a>Sobre mim</a></li>
            </nav>
        </header>
    );
}

export default Header