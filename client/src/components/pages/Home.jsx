import React, { useState, useEffect, Fragment } from 'react';
import Hero from '../containers/Hero';
import TwoCol from '../containers/TwoCol';
import PrimaryFourCol from '../containers/PrimaryFourCol';
import CallToAction from '../containers/CallToAction';
import axios from 'axios';

export default () => {
    const [twoColData, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                let response = await axios.get(`/homepage/index-two-col-data`);
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
                header="Enzo Horquin"
                subHeader="Helping you get online."
                bg="home-hero-bg"
                secondaryBg=""
                btnPara="Get In Touch"
            />
            <PrimaryFourCol />

            {twoColData.map((data, i) => {
                return (
                    <TwoCol
                        key={i}
                        header={data.header}
                        para={data.para}
                        img={data.img}
                        altText={data.altText}
                        btnPara={data.btnPara}
                        internalLink={data.internalLink}
                        link={data.link}
                        pullImg={data.pullImg}
                        bg={i % 2 === 0 ? null : 'cta-bg' }
                    />
                )
            })}
            <CallToAction
                ctaHeader="Let's Connect"
                ctaPara="Have a project in mind? Want me to speak at your event? Require consulting on a current development? Let’s talk about it."
                ctaBtnText="Send Message"
            />
        </Fragment>
    );
}