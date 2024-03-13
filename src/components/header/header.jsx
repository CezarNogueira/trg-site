import './Header_module.css'

function Header () {
    return (
        <header className='header'>
                <div className='conteiner-logo'>
                    <div className="logo-imagem">
                        <img className="logo" src="../../public/Ananery.svg" alt="Logo" />
                    </div>
                </div>
            <nav className='menu'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Contato</a></li>
                <li><a href="#">Sobre mim</a></li>
            </nav>
        </header>
    )
}

export default Header