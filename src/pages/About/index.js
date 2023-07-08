import React from 'react';
import img1 from '../../img/vertical/img-vert1.jpeg'
import img2 from '../../img/vertical/img-vert2.jpeg'

export default function Sobre() {
    const tempoSlider = 3000;

    return (
        <>
            <div className='container col-12 mt-5'>

                <div className='d-flex align-items-center'>
                    <div className='col-3'>
                        <button className="BOTAO1 bg-transparent border-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="black" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                            <span className="visually-hidden">Previous</span>
                        </button>
                    </div>
                    <div className='col-6'>
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
                                            <div className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus libero id purus lobortis faucibus. In neque dolor, consequat ut tristique quis, facilisis at ex. In ac bibendum nisl, ac dignissim turpis. Phasellus pharetra arcu ut laoreet egestas. Proin condimentum mauris vel diam congue, sed cursus risus mollis. Sed non mi sem. Aliquam vitae metus in risus sodales ultrices. In hac habitasse platea dictumst. Curabitur lectus velit, viverra eu erat in, dapibus pharetra dolor.</div>
                                        </div>
                                    </div>
                                </div>


                                <div className="carousel-item" >
                                    <img src={img2} className="d-block w-50" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </div>
                                </div>


                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className='col-3'>
                        <button className="BOTAO2 bg-transparent border-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="black" class="bi bi-chevron-right" viewBox="0 0 16 16">
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