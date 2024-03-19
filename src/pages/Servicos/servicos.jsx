import { useState } from 'react';
import './Servicos_module.css';

function Servicos () {
    const imgs = ['sessao1.jpg', 'sessao2.jpg', 'sessao3.jpg'];
    const [nowIndex, setNowIndex] = useState(0);

    const nextSlide = () => {
        setNowIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    };

    const backSlide = () => {
        setNowIndex((prevIndex) => (prevIndex - 1 + imgs.length) % imgs.length);
    };

    return (
        <div className='conteiner'>

            <div className="grid_wrapper_servicos">
                <article>
                    <div className='back_arrow'>
                        <img onClick={backSlide} src="../public/arrow_back.svg" alt="seta de voltar" />
                    </div> 
                </article> 
                <section className='servicos_conteiner'>              
                        <img className='imagem-servicos' src={imgs[nowIndex]} alt={`Imagem ${nowIndex + 1}`}/>
                </section>
                <article>
                    <div className='next_arrow'>
                        <img onClick={nextSlide} src="../public/arrow_next.svg" alt="seta de avançar" />
                    </div>
                </article>
            </div>

        </div> 
    );
}

export default Servicos