import React from 'react';

function NavBar () {
    return(
        <React.Fragment>
            <ul className="navbar-nav color-pp  sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon">
                    <i><img className="img-profile rounded-circle" src="images/company-logo.png" width="60" alt="" /></i>
                </div>
                <div className="sidebar-brand-text mt-2 mx-3">Weasley's Wizard Wheezes</div>
                </a>
                <hr className="sidebar-divider"/>
                <div className="sidebar-heading">Principal</div>
                <li className="nav-item active">
                <a className="nav-link" href="/">
                    <i className="fas fa-columns"></i>
                    <span>Dashboard</span></a>
                </li><br/>
                <hr className="sidebar-divider"/>
                <div className="sidebar-heading">Links</div>
                <li className="nav-item">
                <a className="nav-link collapsed" href="/">
                    <i className="fab fa-chrome"></i>
                    <span><a style={{ color: 'inherit', textDecoration: 'inherit'}} href="http://localhost:3001" target="_blank" rel="noopener noreferrer">Home Weasley's</a></span>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-sign-in-alt"></i>
                    <span><a style={{ color: 'inherit', textDecoration: 'inherit'}} href="http://localhost:3001/users/login" target="_blank" rel="noopener noreferrer">Login Weasley's</a></span></a>
                </li>
                <hr className="sidebar-divider"/>
                <div className="sidebar-heading">Acciones</div>
                <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tablas</span></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-balance-scale"></i>
                    <span>Métricas</span></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-database"></i>
                    <span>Base de datos</span></a>
                </li>
                <hr className="sidebar-divider"/>
                <div className="sidebar-heading">Contacto</div>
                <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-id-card"></i>
                    <span><a style={{ color: 'inherit', textDecoration: 'inherit'}} href="images/formulario.png" target="_blank" rel="noopener noreferrer">Contacto</a></span></a>
                </li>
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
        </React.Fragment>
    );
}

export default NavBar;