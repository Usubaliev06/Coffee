import React, { useEffect } from "react";
import css from "./AboutUS.module.css";
import { Parallax } from "react-parallax";
import { useDispatch, useSelector } from "react-redux";
import { staffActions } from "../../../store/staffSlice";
import Loader from "../../loyaut/Loader";


import womenBarista from "../../../images/women_barista.jpg";
import aboutUsBarista from "../../../images/aboutUsBarista.png";
import aboutUsFlovers from "../../../images/aboutUSFlovers.png";

import { FaGem} from "react-icons/fa";
import { BsPeopleFill} from "react-icons/bs";
import { FaRegSmileBeam} from "react-icons/fa";
import { GiJeweledChalice} from "react-icons/gi";

import parallaxImg from "../../../images/about_us_bg.jpg";

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const AboutUs = () => {
  const data = useSelector((state) => state.staff.data);
  const { status } = useSelector((state) => state.staff.getData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!status) {
      dispatch(staffActions.getData());
    }
  }, []);

  console.log(data, status);

  useEffect(() => {
    topFunction();
  }, []);


  if ( status === "pending" ){
    return (
      <Loader/>
    )
  }else if (status === "rejected"){
    <div>
      Error
    </div>
  }
  else {
  return (
    <div className={css.aboutUsWrapper}>
      <Parallax
        className={css.parallax}
        blur={1}
        bgImage={parallaxImg}
        bgImageAlt="the cat"
        strength={600}
      >
        <h1>About Us</h1>
      </Parallax>
      <div className="container">
        <section className={css.whyWe}>
          <div className={css.whyWeDes}>
            <h2>ABOUT US</h2>
            <h1>Organic & Fresh Coffee Provider Center</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error voluptate
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa
              quae abillo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsluptatem quia voluptas sit
              aspernatur aut odit aut fugit sed quia consequuntur magni dolores
              eos qui ratione
            </p>

            <div className={css.whyWeDesCard}>
              <div className={css.whyWeDesCardLeft}>
                <img src={aboutUsBarista} alt="" />
              </div>
              <div className={css.whyWeDesCardRight}>
                <p>
                  Quis autem vel eum iure reprehenderit in ealuptate velit esse
                  molestiae
                </p>
              </div>
            </div>
          </div>

          <div className={css.whyWeImg}>
            <img src={aboutUsFlovers} alt="" />
          </div>
        </section>

        <div className={css.staffWrapper}>
          <h2>EXPERIENCE TEAM MEMBER</h2>
          <h1>Meet Our Professional Chefs</h1>
          <div className={css.staffCards}>

            <div className={css.staffCard}>
              <h1>Anthony J. Bowman</h1>
              <h2>Senior Chefs</h2>
              <div className={css.staffImg}>
                <img src={womenBarista} alt="" />
                <div className={css.staffImgOverlay}>
                  <p className={css.staffPhone}>bowmankf@gmail.com</p>
                  <p className={css.staffEmail}>+012 (345) 678 99</p>
                </div>
              </div>
            </div>
            
            {data?.map((item) => {
              return (
                  <div  key={item.id} className={css.staffCard}>
                    <h1>{item.name}</h1>
                    <h2>{item.position}</h2>
                    <div className={css.staffImg}>
                      <img src={item.image} alt="" />
                      <div className={css.staffImgOverlay}>
                        <p className={css.staffPhone}>{item.email}</p>
                        <p className={css.staffEmail}>{item.number}</p>
                      </div>
                    </div>
                  </div>
              );
            })}


          </div>
        </div>

      <div className={css.ourPlus}>

        <div className={css.plusCard}>
          <FaGem className={css.icons}/>
          <h2>256+</h2>
          <h1>Premium Clients</h1>
          <p>Sed ut perspiciatis unde</p>
        </div>

        <div className={css.plusCard}>
          <BsPeopleFill className={css.icons}/>
          <h2>36+</h2>
          <h1>Professional Chefs</h1>
          <p>Sed ut perspiciatis unde</p>
        </div>

        <div className={css.plusCard}>
          <FaRegSmileBeam  className={css.icons}/>
          <h2>753+</h2>
          <h1>Winning Awards</h1>
          <p>Sed ut perspiciatis unde</p>
        </div>

        <div className={css.plusCard}>
          <GiJeweledChalice className={css.icons}/>
          <h2>100+</h2>
          <h1>5 Star Reviews</h1>
          <p>Sed ut perspiciatis unde</p>
        </div>


      </div>

      </div>

    </div>
  );
  }
};

export default AboutUs;
