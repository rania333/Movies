import React from 'react';
import {Link} from 'react-router-dom'

export default function NavbarComponent() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">Movie APP</Link>
                <button className="navbar-toggler" type="button" 
                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/fav">Favourite</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="filter">Filter</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                            <Link className="nav-link" to="/signup">Sign up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
            </nav>
        </div>
    )
}
