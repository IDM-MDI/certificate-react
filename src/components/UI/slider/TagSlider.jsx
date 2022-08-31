import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopTag from "../block/TopTag";
import classes from './Slider.module.css'

const TagSlider = ({data,...props}) => {
    if(data === null || data.content === null)  return;

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: 350,
        slidesToShow: 1,
        speed: 500,
        // nextArrow: <div className={classes.arrowSlider}><Arrow direction={'right'} height={"75px"} width={"45px"}/></div>,
        // prevArrow: <div className={classes.arrowSlider}><Arrow direction={'left'} height={"75px"} width={"45px"}/></div>
        arrows: false
    };

    return (
        <Slider {...settings}>
            {
                data.content.map((tag) => {
                    return <div className={classes.tagSlider}>
                        <TopTag data={tag} key={tag.id} />
                    </div>
                })
            }
        </Slider>
    );
};

export default TagSlider;