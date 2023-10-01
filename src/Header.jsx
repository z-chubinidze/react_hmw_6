import React, { Component, Fragment } from "react";

class Header extends Component {
    render() {
        return (

            <Fragment>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark ps-5">
                    <div className="container-fluid">
                        <a className="navbar-brand " href="#"><h1>HELLO</h1></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav  mb-2 gap-4 mb-lg-0" style={{margin : "0 auto"}}>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">world news</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">programs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">contacts</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Fragment>

        );
    }
}

export default Header