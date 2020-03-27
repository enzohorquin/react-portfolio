import React, { useState, useEffect, Fragment } from 'react';
import Hero from '../containers/Hero';
import TwoCol from '../containers/TwoCol';
import CallToAction from '../containers/CallToAction';
import axios from 'axios';

export default () => {
    const [twoColData, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            try {
                let response = await axios.get(`/education/projects-two-col-data`);
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
                header= "Computer Science Engineer"
                subHeader= "at UNCPBA. Because learning never stops"
                bg="jaiio-bg"
                style={{ marginLeft:'50px'}}
            />
            {(twoColData).map((data, i) => {
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
        </Fragment>
    );



}