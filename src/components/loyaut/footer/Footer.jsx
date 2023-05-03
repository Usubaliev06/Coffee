import React from "react";
import css from "./Footer.module.css";
import logo from "../../../images/logo.png";
import { BiMapPin } from "react-icons/bi";
import {
  BsFillEnvelopeAtFill,
  BsFillTelephoneOutboundFill,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className={css.footerWrapper}>
      <div className="container">
      <div>
        <footer>
          <div className={css.footerInfo}>
            <div className={css.logo}>
              <img src={logo} alt="" />
            </div>

            <div className={css.workingHours}>
              <h1>Working Hours</h1>

              <h2>Sunday - Thursday</h2>
              <p>08:00 am - 09:00pm</p>

              <h2>Only Friday</h2>
              <p>03:00 pm - 09:00pm</p>

              <h2>Saturday close</h2>
            </div>

            <div className={css.contactUs}>
              <h1>Contact Us</h1>

              <div className={css.contactItemWrapper}>
                <BiMapPin className={css.contactItemWrapperImg} />
                <div className={css.contactItem}>
                  <h2>Location :</h2>
                  <p>55 Main Street, New York</p>
                </div>
              </div>

              <div className={css.contactItemWrapper}>
                <BsFillEnvelopeAtFill className={css.contactItemWrapperImg} />
                <div className={css.contactItem}>
                  <h2>Email Address :</h2>
                  <p>kaffendev@gmail.com</p>
                </div>
              </div>

              <div className={css.contactItemWrapper}>
                <BsFillTelephoneOutboundFill
                  className={css.contactItemWrapperImg}
                />
                <div className={css.contactItem}>
                  <h2>Phone Number :</h2>
                  <p>+012 (345) 678 99</p>
                </div>
              </div>
            </div>

            <div className={css.map}>
              <h1>Map</h1>
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab2e2e24906f53d8e7e9ca6820fc85ccc395cb00bce88d7bcfb93009328158dd1&amp;source=constructor"
                width="300"
                height="300"
                frameBorder="0"
              ></iframe>
            </div>
          </div>

          <div className={css.copy}>
            <p>Copyright © 2022 Kaffen. All Rights Reserved.</p>
          </div>
        </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
