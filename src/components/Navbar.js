import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import mylogo from "./mylogo.png"

export default class Navbar extends Component {
    render() {
        let { handleOntoggle, mode } = this.props
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${mode === 'dark' ? 'dark' : 'dark'} bg-${mode === 'dark' ? 'dark' : 'primary'}`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img style={{"marginTop":"3px"}} src={mylogo} alt="" width="24" height="24" className="d-inline-block align-text-top" />
                            &nbsp;&nbsp;<b>NewsZilla</b>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/technology">Technology</Link>
                                </li>
                            </ul>
                            <div className="form-check form-switch">
                                <input style={{ "cursor": "pointer" }} className="form-check-input" type="checkbox" onClick={handleOntoggle} role="switch" id="flexSwitchCheckDefault" />
                                <label className={`form-check-label text-${mode === 'light' ? 'light' : 'light'}`} htmlFor="flexSwitchCheckDefault">{mode === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode'}</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
