import React from 'react';
import img1 from '../../img/vertical/img-vert1.jpeg'
import img2 from '../../img/vertical/img-vert2.jpeg'

export default function Sobre() {
    const tempoCarousel = 3000;
    const tamanhoBotaoCarousel = 40;

    return (
        <>
            <div className='container col-12 mt-5'>
                <div className='d-flex align-items-center'>

                    <div className='col-2 d-flex justify-content-center'>
                        <button className="BOTAO1 bg-transparent border-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width={tamanhoBotaoCarousel} height={tamanhoBotaoCarousel} fill="black" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                            <span className="visually-hidden">Previous</span>
                        </button>
                    </div>
                    <div className='col-8'>
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-theme="dark">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" >
                                    <div className='d-flex'>
                                        <img src={img1} className="d-block w-50" alt="..." />
                                        <div className="d-flex flex-column justify-content-end mb-5 ps-3">
                                            <div className='fs-3'>Instalação de aabbbcccdd</div>
                                            <div className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus libero id purus.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item" >
                                    <div className='d-flex'>
                                        <img src={img2} className="d-block w-50" alt="..." />
                                        <div className="d-flex flex-column justify-content-end mb-5 ps-3">
                                            <div className='fs-3'>Instalação de aabbbcccdd</div>
                                            <div className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus libero id purus.</div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className='col-2 d-flex justify-content-center'>
                        <button className="BOTAO2 bg-transparent border-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <svg xmlns="http://www.w3.org/2000/svg" width={tamanhoBotaoCarousel} height={tamanhoBotaoCarousel} fill="black" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}