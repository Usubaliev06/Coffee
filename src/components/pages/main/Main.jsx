import React from "react";
import css from "./Main.module.css";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";


import womenBarista from "../../../images/women_barista.jpg";
import cap from "../../../images/cap_of_coffee.png";
import coffeeThree from "../../../images/coffee_three.png";
import bookingTableImg  from "../../../images/booking_table.jpg";

const Main = () => {
  return (
    <div className={css.mainWrapper}>
      {/* <Parallax className={css.test} blur={1} bgImage={img} bgImageAlt="the cat" strength={100}>
        Content goes here. Parallax height grows with content height.
    </Parallax> */}

      <div className="container">
        <main>
          <section className={css.whyWe}>
            <div className={css.whyWeImg}>
              <img src={womenBarista} alt="" />
            </div>
            <div className={css.whyWeDes}>
              <h2>WHY CHOOSE US</h2>
              <h1>New London Coffee Founded For Extraordinary Test</h1>
              <p>
                Sed ut perspiciatis unde omnis iste natus error voluptate
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa
                quae abillo inventore veritatis
              </p>

              <div className={css.whyWeDesCard}>
                <div className={css.whyWeDesCardLeft}>
                  <img src={cap} alt="" />
                </div>
                <div className={css.whyWeDesCardRight}>
                  <h1>Natural Coffee Beans</h1>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptate
                    accusantium doloremque
                  </p>
                </div>
              </div>

              <div className={css.whyWeDesCard}>
                <div className={css.whyWeDesCardLeft}>
                  <img src={coffeeThree} alt="" />
                </div>
                <div className={css.whyWeDesCardRight}>
                  <h1>100% ISO Certification</h1>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptate
                    accusantium doloremque
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* //////////////////////////////////////////////////////////////////// */}
          <section className={css.facts}>
            <div className={css.factsCard}>
              <div className={css.factsCardLeft}>
                <h1>256+</h1>
              </div>
              <div className={css.factsCardRight}>
                <h2>Premium Clients</h2>
                <p>Sed ut perspiciatis unde</p>
              </div>
            </div>
            <div className={css.factsCard}>
              <div className={css.factsCardLeft}>
                <h1>362+</h1>
              </div>
              <div className={css.factsCardRight}>
                <h2>Expert Members</h2>
                <p>Sed ut perspiciatis unde</p>
              </div>
            </div>
            <div className={css.factsCard}>
              <div className={css.factsCardLeft}>
                <h1>753+</h1>
              </div>
              <div className={css.factsCardRight}>
                <h2>Winning Awards</h2>
                <p>Sed ut perspiciatis unde</p>
              </div>
            </div>
          </section>
          {/* //////////////////////////////////////////////////////////////////// */}

        
  <Parallax className={css.bookingTable} blur={1} bgImage={bookingTableImg} bgImageAlt="the cat" strength={400}>
      <div className={css.bookingTableLeft}>
        <h2>NEED A TABLE ON COFFEE HOUSE</h2>
        <h1>Booking Table For Your & Family Members</h1>
      </div>
      <div className={css.bookingTableRight}>
        <Link to="/reservation">Booking table</Link>
      </div>

    </Parallax>
        

        </main>
      </div>
    </div>
  );
};

export default Main;
