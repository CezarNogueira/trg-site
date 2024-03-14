import './Home_module.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

function Home () {
    return (
        <div className='conteiner'>
            <div className="grid-wrapper">
                <header><Header/></header>
                <section>Section</section>
                <div className='content'>content</div>
                <footer><Footer/></footer>
            </div>
        </div> 
    );
}

export default Home