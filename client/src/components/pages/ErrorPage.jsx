import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default () => {
    const [display, setDisplay] = useState(true);

    function displayNone() {
        setDisplay(false);
    }
    return (
        <Fragment>
            <div className="full-width-row error-primary-bg">
                <div className="error-div" style={{display : display ? 'block' : 'none'}}>
                    <h2 className="error-div__header text-center ">404</h2>
                    <h2 className="error-div__sub-header text-center" style={{marginBottom: "10px"}}>Oh no! Page not found.</h2>
                    <Link to={`/`} className="btn btn--white center-content" onClick={displayNone}>
                    Return to Home
                    </Link>

                </div>
            </div>
        </Fragment>
    );
}