import './Home_module.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

function Home () {
    return (
        <div className='conteiner'>

            <header><Header/></header>

            <div className="grid-wrapper">

                <section className='banner-area'>
                    Section
                </section>

                <div className='content-area'>

                    <div className='img-text'>
                        <article className='content-img'>IMAGEM</article>
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