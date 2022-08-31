import React, {useState} from 'react';
import classes from "./Page.module.css";
import Image from './img/Vector natural night view, natural illustration of land and mountains and houses and sea.jpg'
import Text from "../text/Text";

const About = () => {
    return (
        <div className={classes.aboutBlock}>
            <img src={Image} alt="" className={classes.aboutImage}/>
            <div className={classes.aboutText}>
                <Text>
                    Hello this is epam template project by name “gift certificate”
                    n't anything embarrassing hidden in the middle of text.
                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                    making this the first true generator on the Internet.
                    It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
                    to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from repetition,
                </Text>
            </div>
        </div>
    );
};

export default About;