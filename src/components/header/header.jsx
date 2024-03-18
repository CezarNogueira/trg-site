import { useState } from 'react'
import './Header_module.css'

function Header () {
    
    const [nowPage, setNowPage] = useState('home');

    const clickPage = (page) => {
        setNowPage(page);
    }
    return (
        <header className='header'>
                <div className='conteiner-logo'>
                    <div className="logo-imagem">
                        <img className="logo" src="../../public/Ananery.svg" alt="Logo" />
                    </div>
                </div>
            <nav className='menu'>
                <li onClick={() => clickPage('home')}><a>Home</a></li>
                <li onClick={() => clickPage('servicos')}><a>Serviços</a></li>
                <li onClick={() => clickPage('contato')}><a>Contato</a></li>
                <li onClick={() => clickPage('sobre')}><a>Sobre mim</a></li>
            </nav>
        </header>
    );
}

export default Header