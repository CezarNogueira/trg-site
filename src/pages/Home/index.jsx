import './Home_module.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

function Home () {
    return (
        <div className='conteiner'>

            <header><Header/></header>

            <div className="grid-wrapper">

                <section className='banner-area'>              
                        <img className='imagem-banner' src="../../public/trg-banner.jpg" alt="Imagem do Banner sobre a TRG" />
                </section>

                <div className='content-area'>

                    <div className='img-text'>
                        <article className='content-img'>
                                <img className='imagem-content' src="../../public/profile-home.jpg" alt="Foto de Ana Nery" />
                        </article>
                        <article className='content-text'>
                            <div className='text-content'>
                            <h3 id='text-home'>Ana Nery de Carvalho é uma Terapeuta de Resultado especializada em ansiedade e depressão, certificada pela TRG.<br/><br/>Sua abordagem personalizada e centrada no cliente visa oferecer soluções eficazes, capacitando indivíduos a superar desafios emocionais e recuperar o equilíbrio.<br/><br/>Entre em contato para iniciar sua jornada de bem-estar.</h3>
                            </div>
                            
                        </article>

                    </div>

                </div>

                <div className='certificates'>

                        <div className="certificate-box">
                            <img src="" alt="" />
                        </div>

                        <div className="certificate-box">
                            <img src="" alt="" />
                        </div>

                        <div className="certificate-box">
                            <img src="" alt="" />
                        </div>

                </div>

            </div>

            <footer><Footer/></footer>

        </div> 
    );
}

export default Home