import Footer from "../../components/Footer";
import Titulo from "../../components/Titulo";

import 'boxicons';


export default function Servicos() {
    return (
        <>
            <Titulo titulo="Nossos Serviços" />
            <div className="fs-3 fw-bold d-flex flex-column flex-fill justify-content-center mx-auto fade-container mt-3 mt-sm-0">
                <p className="fade-item d-flex align-align-items-center"><box-icon size="36px"name='chevron-right'></box-icon>
                    Gás Predial: rede geral, prumada, apartamento, Instalação e manutenção em geral</p>
                <p className="fade-item d-flex align-align-items-center"><box-icon size="36px"name='chevron-right'></box-icon>Hidráulica de grande e pequeno porte: Instalação e manutenção</p>
                <p className="fade-item d-flex align-align-items-center"><box-icon size="36px"name='chevron-right'></box-icon>Elétrica: Instalação e manutenção</p>
                <p className="fade-item d-flex align-align-items-center"><box-icon size="36px"name='chevron-right'></box-icon>Automação: Instalação e manutenção</p>
                <p className="fade-item d-flex align-align-items-center"><box-icon size="36px"name='chevron-right'></box-icon>Vistorias técnicas</p>
                <p className="fade-item d-flex align-align-items-center"><box-icon size="36px"name='chevron-right'></box-icon>Manutenção em rede de incêndio</p>
                <p className="fade-item d-flex align-align-items-center"><box-icon size="36px"name='chevron-right'></box-icon>Manutenção em castelos d'água</p>
                <p className="fade-item d-flex align-align-items-center"><box-icon size="36px"name='chevron-right'></box-icon>Instalação de bomba d'água</p>
                <p className="fade-item d-flex align-align-items-center"><box-icon size="36px"name='chevron-right'></box-icon>Terraplanagem e aplicação de asfalto</p>

                <p className="fade-item fw-bolder align-self-end">*Atendimento 24 horas</p>
            </div>
            <Footer></Footer>
        </>
    )
}