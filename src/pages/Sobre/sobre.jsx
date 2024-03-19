import './Sobre_module.css';

function Sobre () {

    return (
        <div className='conteiner'>

            <div className="grid_wrapper_sobre">

                <div className='imagem'>
                    <img className='imagem_sobre' src="../../public/profile-home.jpg" alt="" />
                </div>

                <div className='text'>
                    <h3 id='text-sobre'>Ana Nery de Carvalho é uma Terapeuta de Resultado especializada em ansiedade e depressão, certificada pela TRG.<br/><br/>Sua abordagem personalizada e centrada no cliente visa oferecer soluções eficazes, capacitando indivíduos a superar desafios emocionais e recuperar o equilíbrio.<br/><br/>Entre em contato para iniciar sua jornada de bem-estar.
                    </h3>
                </div>

            </div>
        </div> 
    );
}

export default Sobre