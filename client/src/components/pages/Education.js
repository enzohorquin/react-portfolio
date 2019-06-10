import React from 'react';
import Hero from '../containers/Hero';
import TwoCol from '../containers/TwoCol';
import CallToAction from '../containers/CallToAction';
import axios from 'axios';

export default class Education extends React.Component {
    state = {
        TwoColdata: []
    }
    componentWillMount() {
        let that = this;
         axios.get(`/education/projects-two-col-data`)
        .then(function(response) {
            that.setState({TwoColdata : response.data});
        })
        .catch(function (error) {
            console.log(error);
        }) 
    }

    render() {
        return (
            <div>
                <Hero                  
                    header= "Computer Science Engineer"
                    subHeader= "at UNCPBA. Because learning never stops"
                    bg="jaiio-bg"
                    style={{ marginLeft:'150px'}}
                />
                {(this.state.TwoColdata || []).map((data, i) => {
                    return (
                        <TwoCol
                            
                            key={i}
                            header={data.header}
                            listTitle={`Accomplishments:`}
                            list={data.list}
                            img={data.img}
                            altText={data.altText}
                            btnPara={data.btnPara}
                            internalLink={data.internalLink}
                            link={data.link}
                            pullImg={data.pullImg}
                            bg={i % 2 === 0 ? null : 'cta-bg'}
                        />
                    )
                })}
                <CallToAction
                    ctaHeader="Looking for a Computer Science Engineer or a Full Stack Developer?"
                    ctaPara="I'm ready to dig deep into my arsenal of skills, techniques to help you achieve your goals. Send me a line to get the ball rolling."
                    ctaBtnText="Reach Out"
                />
            </div>
        );

    }
}

