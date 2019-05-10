import React from 'react';
import './NoResult.css'


const NoResult = () =>
    <div>
        <div id="noResult">
            <div className="noResult">
                <div className="noResultOops">
                    <h1>Oops!</h1>
                </div>
                <h2>We tried but we couldn't.</h2>
                <p>The keyword you were looking for could not be found in the collection you selected. You can redial your preferences by changing them.</p>

            </div>
        </div>
    </div>

export default NoResult;