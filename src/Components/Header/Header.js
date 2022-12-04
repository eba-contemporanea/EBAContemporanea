import React from 'react';
import './Header_style.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Header() {
    return (
        <header className="container_">
            <Link to="/" id="logotipo">
                <div className='logos'>
                    <img id='logo' src='/logo_h.png' />
                    <img id='logo2' src='/logo_h_completo.png' />
                </div>
            </Link>

            <ul id="menu_header">
                <li><Link to="/artistas">Artistas</Link></li>
                <li><Link to="/coletivos">Coletivos</Link></li>
                <li><Link to="/cidade_universitaria">Cidade Universitária</Link></li>
                <li><Link to="/EBA">EBA</Link></li>
                <li><Link to="/entrevistas">Entrevistas</Link></li>
                <li><Link to="/projeto">O Projeto</Link>
                    <ul>
                        <li><Link to="/pesquisadores">Pesquisadores</Link></li>
                        <li><Link to="/publicacoes">Publicações</Link></li>
                    </ul>
                </li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>

            <div class="social_media">
                <a href="mailto:ebacontemporanea@gmail.com" id='fb'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href="#" id="insta">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>

            </div>
        </header>
    );
}

export default Header;