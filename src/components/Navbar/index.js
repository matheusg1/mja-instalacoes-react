import React from 'react';
import logo from '../../img/mja-logo.png'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="Logo" width="40" className="d-inline-block" />
                            MJA Instalações
                        </a>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Início</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sobre">Sobre nós</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}