import React from 'react';
import imgAbout from '../../img/img-about.png';

export default function Sobre() {
    const tempoCarousel = 3000;
    const tamanhoBotaoCarousel = 40;
    return (
        <div className='container col-12 d-flex flex-colum justify-content-center align-items-center flex-fill'>
            <img src={imgAbout} className="img-fluid border border-3 border-black" width="600" alt="..." />
            <div className='ms-3 fs-4 fw-bold'>
                Somos uma empresa familiar, fundada há mais de 10 anos no ramo da construção civil. Levando sempre nossa prestação de serviço com um alto grau de profissionalismo, ética e qualidade; e por isto, <span className='bg-dark text-white'>somos uma das maiores prestadores de serviços do estado do Rio de Janeiro</span>. Nosso maior diferencial,  é o atendimento emegencial 24 horas, onde quaisquer emergência de gás, elétrica, hidráulica, automação, vistorias são sanadas.
            </div>
        </div>

    );
}