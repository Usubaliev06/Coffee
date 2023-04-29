import React from "react";
import css  from "./Main.module.css";
import { Parallax } from 'react-parallax';
import img from '../../../images/logo.png'




const Main = () => {
  return (
    
    <div>


    <Parallax className={css.test} blur={1} bgImage={img} bgImageAlt="the cat" strength={100}>
        Content goes here. Parallax height grows with content height.
    </Parallax>

    <div data-aos="zoom-out-up"><p>HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH</p> </div>



    </div>
  );
};

export default Main;

