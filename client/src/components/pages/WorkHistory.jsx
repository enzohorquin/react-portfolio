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
                let response = await axios.get(`/workhistory/work-hist-two-col-data`);
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
                    header="Work History"
                    subHeader="Learn about my professional background"
                    bg="work-hist-bg"
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
                    ctaHeader="What Can I Do For You?"
                    ctaPara="Need a new website? How about sprucing up your current site? Need to get the word out on your amazing product? I can help you out."
                    ctaBtnText="Chat With Me"
                />
        </Fragment>
    );



}