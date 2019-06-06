import React from 'react';

class TwoCol extends React.Component {
    render() {
        return (
            <div className={`full-width-row ${this.props.bg}`}>
                <div className="row-container two-col-container">
                    <div className="two-col-container__text-container">
                        <h2 className="h1-header h1-header--blue">{this.props.header}</h2>

                        {
                            this.props.para &&
                            this.props.para.map((paraItem, i) => {
                                return <p key={i} className="two-col-container__text-container__para para">{paraItem}</p>
                            })
                        }

                        {
                            this.props.listTitle &&
                            <div>
                                <p className="two-col-container__text-container__para para">{this.props.listTitle}</p>
                            </div>
                        }
                        {
                            this.props.list &&
                            <ul>
                                {this.props.list.map((listItem, i) => {
                                    return <li key={i} className="two-col-container__text-container__para para">{listItem}</li>
                                })}
                            </ul>
                        }

                        


                    </div>
                    <div className={`two-col-container__img-container ${this.props.pullImg}`}>
                        <img className="two-col-container__img-container__img" src={this.props.img} alt={this.props.altText} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TwoCol;