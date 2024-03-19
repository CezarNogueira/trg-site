import './Footer_module.css'

function Footer () {
    return (
        <footer>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

            <div className='footer-content'>

                <div className='footer-contacts'>
                   <h1>ANA NERY</h1>
                   <p id='desc'>Terapeuta de Resultado</p>

                   <div className="footer-social">
                        <a href="#" className='footer-link' id='instagram'>
                            <i class="fa-brands fa-instagram"></i>
                        </a>

                        <a href="#" className='footer-link' id='facebook'>
                            <i class="fa-brands fa-facebook"></i>
                        </a>

                        <a href="#" className='footer-link' id='whattsapp'>
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                   </div>

                </div>

                <ul className='footer-list'>
                    <h3>Políticas</h3>
                    <li>
                        <a href="#" className='footer-link'>Política de Privacidade</a>
                    </li>
                    <li>
                        <a href="#" className='footer-link'>Política de Serviço</a>
                    </li>
                </ul>

                <ul className='footer-list'>
                    <h3>Páginas</h3>
                    <li>
                        <a href="#" className='footer-link'>Home</a>
                    </li>
                    <li>
                        <a href="#" className='footer-link'>Serviços</a>
                    </li>
                    <li>
                        <a href="#" className='footer-link'>Sobre mim</a>
                    </li>
                </ul>

            </div>

            <div className='footer-copyright'>
                ©2024 todos os direitos reservados
            </div>

        </footer>
    );
}

export default Footer