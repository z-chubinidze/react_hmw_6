import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
    constructor(){
        super()

        this.state = {
            buttonStyle : {
                width : " 180px",
                height : " 180px",
                borderRadius : "50%",
                fontSize : " 28px"
            }
        }
    }

    render() {
        function cklick(hello) {
            window.alert(hello)
        }
        return (
            <Fragment>

                <Header />
                <div className="d-flex align-items-center justify-content-center" style={{height :"80vh"}}>
                    <button style={this.state.buttonStyle} type="button" className="btn btn-primary" onClick={() => cklick("გამარჯობა მსოფლიო.")}>cklick</button>

                </div>

                <Footer />

            </Fragment>
        );
    }
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />)