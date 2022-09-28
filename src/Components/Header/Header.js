import './Header_style.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
     <header className="container_">
        <Link to="/" id="Logotipo">
            <div className='logos'>
                <img id='logo' src='/logo_h.png' />
                <img id='logo2' src='/logo_h_completo.png' />
            </div>
        </Link>
        <nav>
            <ul id="menu_header">
                <li><Link to="/artistas">Artistas</Link></li>
                <li><Link to="/coletivos">Coletivos</Link></li>
                <li><Link to="/cidade_universitaria">Cidade Universitária</Link></li>
                <li><Link to="/EBA">EBA</Link></li>
                <li><Link to="/entrevistas">Entrevistas</Link></li>
                <li><Link to="/projeto">O Projeto</Link>
                    <ul>
                        <li><Link to="/pesquisadores">Pesquisadores</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/publicacoes">Publicações</Link></li>
                    </ul>
                </li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>
        <a href="#">
            <img id='fb' src='/fb.png' />
        </a>
        <a href="#">
            <img id='insta' src='/instagram.png' />
        </a>
        <hr id='faixa' />
    </header>
    );
}

export default Header;