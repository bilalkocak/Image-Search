import React from 'react';
import './NoResult.css'

class NoResult extends React.Component {


    render() {

        return (

            <div>
                <div id="noResult">
                    <div className="noResult">
                        <div className="noResultOops">
                            <h1>Oops!</h1>
                        </div>
                        <h2>404 - Page not found</h2>
                        <p>The page you are looking for might have been removed had its name changed or is
                            temporarily unavailable.</p>

                    </div>
                </div>
            </div>

        )
    }

}


export default NoResult;