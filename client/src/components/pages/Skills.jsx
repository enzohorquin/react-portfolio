import React, { useState, useEffect, Fragment } from 'react';
import Hero from '../containers/Hero';
import CallToAction from '../containers/CallToAction';
import ThreeColWrap from '../containers/ThreeColWrap';
import axios from 'axios';

export default () => {
    const [state, setState] = useState({
        frontEnd : {},
        backEnd: {},
        marketing : {},
        otherSkills: {},
    });
    useEffect(() => {
        async function getData(){
            try {
                let response = await axios.get(`/skills/skills-data`);
                setState({
                    frontEnd: response.data.frontEnd,
                    backEnd: response.data.backEnd,
                    marketing: response.data.marketing,
                    otherSkills: response.data.otherSkills,
            });
        }
        catch {
            console.log('err')
        }
    }
        getData();
    }, []);

    return (
        <Fragment>
            <Hero
                    header="How I Get Things Online"
                    subHeader="Skills to get your idea off the ground"
                    bg="skills-hero-bg"
                />
                <ThreeColWrap 
                    header={state.frontEnd.header}
                    para={state.frontEnd.para}
                    skills={state.frontEnd.skills}
                />

                <ThreeColWrap
                    header={state.backEnd.header}
                    para={state.backEnd.para}
                    skills={state.backEnd.skills}
                />
                <ThreeColWrap
                    header={state.otherSkills.header}
                    para={state.otherSkills.para}
                    skills={state.otherSkills.skills}
                />
                
                <CallToAction
                    ctaHeader="Need My Expertise?"
                    ctaPara="I'm ready to dig deep into my arsenal of skills, techniques to help you achieve your goals. Send me a line to get the ball rolling."
                    ctaBtnText="Reach Out"
                />
        </Fragment>
    )
}