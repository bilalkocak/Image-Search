import React from 'react';
import {Link} from "react-router-dom";
import './Error.css'
class Error extends React.Component {

    render() {

        return (

            <div>
                <div className="App">
                    <div id="notfound">
                        <div className="notfound">
                            <div className="notfound-404">
                                <h1>4<span></span>4</h1>
                            </div>
                            <h2>Oops! Page Not Be Found</h2>
                            <p>Sorry but the page you are looking for does not exist, have been removed. name changed or
                                is temporarily unavailable</p>
                            <Link to={"/"}>
                                <div className="searchButton backButton">BACK TO HOME</div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        )
    }

}


export default Error;