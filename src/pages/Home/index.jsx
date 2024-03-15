import './Home_module.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

function Home () {
    return (
        <div className='conteiner'>

            <header><Header/></header>

            <div className="grid-wrapper">

                <section className='banner-area'>
                    <div className='img-base-banner'>
                        <img className='imagem-banner' src="https://as2.ftcdn.net/v2/jpg/03/63/53/55/1000_F_363535556_vulHZJm5ASilvxsrHktWK11CihDJ8m6u.jpg" alt="imagem-banner(Atenção: ALTERAR)" />
                    </div>
                </section>

                <div className='content-area'>

                    <div className='img-text'>
                        <article className='content-img'>
                            <div className='img-base-content'>
                                <img className='imagem-content' src="data:image/png;base64,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" alt="Atenção: ALTERAR" />
                            </div>
                        </article>
                        <article className='content-text'>TEXTO</article>
                    </div>

                    <div className='certificates'>
                        <article className='certificate1'>CERTIFICADO</article>
                        <article className='certificate2'>CERTIFICADO</article>
                        <article className='certificate3'>CERTIFICADO</article>
                    </div>

                </div>
                
            </div>

            <footer><Footer/></footer>

        </div> 
    );
}

export default Home