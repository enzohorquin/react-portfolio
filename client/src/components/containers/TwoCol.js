import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

        return (
            <div className={`full-width-row ${props.bg}`}>
                <div className="row-container two-col-container">
                    <div className="two-col-container__text-container">
                        <h2 className="h1-header h1-header--blue">{props.header}</h2>

                        {
                            props.para &&
                            props.para.map((paraItem, i) => {
                                return <p key={i} className="two-col-container__text-container__para para">{paraItem}</p>
                            })
                        }

                        {
                            props.listTitle &&
                            <div>
                                <p className="two-col-container__text-container__para para">{props.listTitle}</p>
                            </div>
                        }
                        {
                            props.list &&
                            <ul>
                                {props.list.map((listItem, i) => {
                                    return <li key={i} className="two-col-container__text-container__para para">{listItem}</li>
                                })}
                            </ul>
                        }

                        {
                            props.internalLink ?
                                <Link to={`/${props.link}`} className="btn btn--white">{props.btnPara}</Link> :
                                <a href={`${props.link}`} rel="noopener noreferrer" target="_blank" className="btn btn--white">{props.btnPara}</a>
                        }


                    </div>
                    <div className={`two-col-container__img-container ${props.pullImg}`}>
                        <img className="two-col-container__img-container__img" src={props.img} alt={props.altText} />
                    </div>
                </div>
            </div>
        );
    
}
