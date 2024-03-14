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
                <li><a href="">Home</a></li>
                <li><a href="servicos">Serviços</a></li>
                <li><a href="contato">Contato</a></li>
                <li><a href="sobre">Sobre mim</a></li>
            </nav>
        </header>
    )
}

export default Header