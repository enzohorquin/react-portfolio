import React, { useState, useEffect, Fragment } from 'react';
import Hero from '../containers/Hero';
import OneCol from '../containers/OneCol';
import CallToAction from '../containers/CallToAction';
import axios from 'axios';

export default () => {
    const [twoColData, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                let response = await axios.get(`/projects/projects-two-col-data`);
                setData(response.data);
            }
            catch {
                console.log('Err');
            }
        }
        getData();
    },[])

    return (
        <Fragment>
            <Hero
                    header="Things I've Built"
                    subHeader="Because talk is cheap"
                    bg="projects-bg"
                />
                {twoColData.map((data, i) => {
                    return (
                        <OneCol
                            key={i}
                            header={data.header}
                            para={data.para}
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
                    ctaHeader="Let's Start On Your Project?"
                    ctaPara="I'm ready to dig deep into my arsenal of skills, techniques to help you achieve your goals. Send me a line to get the ball rolling."
                    ctaBtnText="Reach Out"
                />
        </Fragment>
    )
}