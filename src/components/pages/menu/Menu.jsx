import React, { useEffect, useState } from "react";
import css from "./Menu.module.css";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import foto1 from "../../../images/enis-yavuz-sBS-Ufi0f1g-unsplash.jpg";
import coffeeImg1 from "../../../images/jeremy-yap-jn-HaGWe4yw-unsplash.jpg";
import coffeeImg2 from "../../../images/mike-kenneally-zlwDJoKTuA8-unsplash.jpg";
import bookingTableImg from "../../../images/booking_table.jpg";
import { menuActions } from "../../../store/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../loyaut/Loader";

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const Menu = () => {
  const dispatch = useDispatch();
  const [coffeeError, setcoffeeError] = useState(css.menuErrorNone);
  const [fastFoodError, setFoodError] = useState(css.menuErrorNone);
  const [desertError, setDesertError] = useState(css.menuErrorNone);

  const [coffeeCards, setcoffeeCards] = useState(css.cards);
  const [fastFoodCards, setFoodCards] = useState(css.cards);
  const [desertCards, setDesertCards] = useState(css.cards);

  const coffee = useSelector((state) => state.menu.coffee);
  const { status: coffeeStatus } = useSelector((state) => state.menu.getCoffee);
  const fastFood = useSelector((state) => state.menu.fastFood);
  const { status: fastFoodStatus } = useSelector(
    (state) => state.menu.getFastFood
  );
  const desert = useSelector((state) => state.menu.desert);
  const { status: desertStatus } = useSelector((state) => state.menu.getDesert);

  useEffect(() => {
    if (!coffeeStatus) dispatch(menuActions.getCoffee());
    if (!fastFoodStatus) dispatch(menuActions.getFastFood());
    if (!desertStatus) dispatch(menuActions.getDesert());
    // console.log(coffeeStatus);
    console.log(desertStatus)

    if (coffeeStatus === "rejected") {
      setcoffeeError(css.menuError);
      setcoffeeCards(css.cardsNone);
    }
    if (fastFoodStatus === "rejected") {
      setFoodError(css.menuError);
      setFoodCards(css.cardsNone);
    }
    if (desertStatus === "rejected") {
      setDesertError(css.menuError);
      setDesertCards(css.cardsNone);
    }
  }, [coffeeStatus, fastFoodStatus, desertStatus]);

  useEffect(() => {
    topFunction();
  }, []);

  if (coffeeStatus === "pending") {
    return <Loader />;
  } else {
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
              <div className={fastFoodError}>
                <h1>Sorry we have a problem now</h1>
              </div>
              <div className={fastFoodCards}>
                {/* ///////////////////////////////////////////////////////////////// */}

                {fastFood?.map((item) => {
                  return (
                    <div key={item.id} className={css.card}>
                      <div className={css.cardImg}>
                        <img src={item.image} alt="" />
                      </div>
                      <div className={css.cardDes}>
                        <h1>{item.name}</h1>
                        <p className={css.compound}>{item.description}</p>
                        <p className={css.price}>Price: ... ${item.price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <h1>Coffee</h1>
              <div className={coffeeError}>
                <h1>Sorry we have a problem now</h1>
              </div>
              <div className={coffeeCards}>
                {/* ///////////////////////////////////////////////////////////////// */}

                {coffee?.map((item) => {
                  return (
                    <div key={item.id} className={css.card}>
                      <div className={css.cardImg}>
                        <img src={item.image} alt="" />'
                      </div>

                      <div className={css.cardDes}>
                        <h1>{item.name}</h1>
                        <p className={css.compound}>{item.description}</p>
                        <p className={css.price}>Price: ... ${item.price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <h1>Dessert</h1>
              <div className={desertError}>
                <h1>Sorry we have a problem now</h1>
              </div>
              <div className={desertCards}>
                {/* ///////////////////////////////////////////////////////////////// */}
                {desert?.map((item) => {
                  return (
                    <div key={item.id} className={css.card}>
                      <div className={css.cardImg}>
                        <img src={item.image} alt="" />'
                      </div>

                      <div className={css.cardDes}>
                        <h1>{item.name}</h1>
                        <p className={css.compound}>{item.description}</p>
                        <p className={css.price}>Price: ... ${item.price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <Parallax
            className={css.bookingTable}
            blur={1}
            bgImage={bookingTableImg}
            bgImageAlt="the cat"
            strength={400}
          >
            <div className={css.bookingTableLeft}>
              <h2>NEED A TABLE ON COFFEE HOUSE</h2>
              <h1>Booking Table For Your & Family Members</h1>
            </div>
            <div className={css.bookingTableRight}>
              <Link to="/reservation">Booking table</Link>
            </div>
          </Parallax>
        </div>
      </div>
    );
  }
};

export default Menu;
