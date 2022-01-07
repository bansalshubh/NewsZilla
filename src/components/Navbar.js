import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        let { handleOntoggle, mode } = this.props
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${mode === 'dark' ? 'dark' : 'light'} bg-${mode === 'dark' ? 'dark' : 'light'}`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/about">About us</a>
                                </li>
                            </ul>
                            {/* <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-primary" type="submit">Search</button>
                            </form> */}
                            <div className="form-check form-switch">
                                <input style={{ "cursor": "pointer" }} className="form-check-input" type="checkbox" onClick={handleOntoggle} role="switch" id="flexSwitchCheckDefault" />
                                <label className={`form-check-label text-${mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{mode === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode'}</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
