import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
      <div className={props.bg}>
        <div  className={`hero row-container ${props.secondaryBg}`}>
          <div className="hero__content">
            <h1 style={props.style} className="hero__content__h1">{props.header}</h1>
            <h2 style={props.style} className="hero__content__h2">
              {props.subHeader}
            </h2>
              {props.btnPara &&
                <Link to={`/contact`} className="hero__content__button">{props.btnPara}</Link>
              }
          </div>
        </div>
      </div>
    );
  
}
