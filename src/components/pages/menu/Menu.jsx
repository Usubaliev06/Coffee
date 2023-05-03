import React from "react";
import css from "./Menu.module.css";
import { Parallax } from "react-parallax";
import foto1 from "../../../images/enis-yavuz-sBS-Ufi0f1g-unsplash.jpg";
import coffee from "../../../images/jeremy-yap-jn-HaGWe4yw-unsplash.jpg";
import coffee2 from "../../../images/mike-kenneally-zlwDJoKTuA8-unsplash.jpg";

const Menu = () => {
  return (
    <div className={css.menuWrapper}>
      <Parallax
        className={css.block1}
        bgImage={foto1}
        bgImageAlt="the cat"
        strength={500}
      >
        <h1>Coffee Menu</h1>
      </Parallax>

      <div className="container">
        <div className={css.block2}>
          <h2>CHOOSE BEST OF</h2>
          <h1>Kaffen Coffee Menu</h1>
          <div className={css.cardsWrapper}>
            <h1>Fast food</h1>
            <div className={css.cards}>
              {/* ///////////////////////////////////////////////////////////////// */}
              <div className={css.card}>
                <div className={css.cardImg}>
                  <img src={coffee} alt="" />'
                </div>

                <div className={css.cardDes}>
                  <h1>Americano</h1>
                  <p className={css.compound}>
                    2/3 espresso, 1/3 streamed milk
                  </p>
                  <p className={css.price}>Price: ... $4.9</p>
                </div>
              </div>
              <div className={css.card}>
                <div className={css.cardImg}>
                  <img src={coffee} alt="" />'
                </div>

                <div className={css.cardDes}>
                  <h1>Americano</h1>
                  <p className={css.compound}>
                    2/3 espresso, 1/3 streamed milk
                  </p>
                  <p className={css.price}>Price: ... $4.9</p>
                </div>
              </div>
              <div className={css.card}>
                <div className={css.cardImg}>
                  <img src={coffee2} alt="" />'
                </div>

                <div className={css.cardDes}>
                  <h1>Americano</h1>
                  <p className={css.compound}>
                    2/3 espresso, 1/3 streamed milk
                  </p>
                  <p className={css.price}>Price: ... $4.9</p>
                </div>
              </div>
            </div>


            <h1>Coffee</h1>
            <div className={css.cards}>
              {/* ///////////////////////////////////////////////////////////////// */}
              <div className={css.card}>
                <div className={css.cardImg}>
                  <img src={coffee} alt="" />'
                </div>

                <div className={css.cardDes}>
                  <h1>Americano</h1>
                  <p className={css.compound}>
                    2/3 espresso, 1/3 streamed milk
                  </p>
                  <p className={css.price}>Price: ... $4.9</p>
                </div>
              </div>
            </div>

            <h1>Dessert</h1>
            <div className={css.cards}>
              {/* ///////////////////////////////////////////////////////////////// */}
              <div className={css.card}>
                <div className={css.cardImg}>
                  <img src={coffee} alt="" />'
                </div>

                <div className={css.cardDes}>
                  <h1>Americano</h1>
                  <p className={css.compound}>
                    2/3 espresso, 1/3 streamed milk
                  </p>
                  <p className={css.price}>Price: ... $4.9</p>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
  );
};

export default Menu;
