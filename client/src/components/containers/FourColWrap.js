import React from "react";

export default (props) => {
    return (
        <div className="full-width-row cta-bg">
        <div className="row-container">
          <div>
            <h2 className="h1-header h1-header--blue">{props.header}</h2>
            <p className="para para-md-width">
              {props.para}
            </p>
          </div>

          <div className="four-col-wrap">
            {
               props.skills &&  props.skills.map((skill, i) => {
                return (
                  <div key={i} className="four-col-wrap__item">
                    <div className="four-col-wrap__item__inner">
                      {
                        RegExp('.(gif|jpg|jpeg|tiff|png)$').test(skill.icon) === true ?
                          <img
                            className="four-col-wrap__item__inner__jquery-img"
                            src={skill.icon}
                            alt={`${skill.text}`}
                          />
                          :
                          <i className={`four-col-wrap__item__inner__icon ${skill.icon}`} />
                      }
                      <h3 className="h3-header text-center">{skill.text}</h3>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
}