import React, { Component, Fragment } from "react";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer className="bottom-0 position-fixed w-100">
                    <div className="container-fluid bg-dark pt-4 pb-4   ">
                        <div className="container d-flex align-items-center gap-4 justify-content-center " style={{ margin: "0 auto" }}>
                            <img src="./copyright.jpg" alt="" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                            <h5 className="text-light">zurab chubinidze</h5>
                        </div>
                    </div>
                   
                </footer>
                
            </Fragment>
        );
    }
}

export default Footer