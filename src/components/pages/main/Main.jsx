import React, { useEffect, useState } from "react";
import css from "./Main.module.css";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { staffActions } from "../../../store/staffSlice";
import Loader from "../../loyaut/Loader";
// https://codepen.io/ge1doot/pen/LZdOwj
// https://codepen.io/aderaaij/pen/XWpMONO
// import barista from "../../../images/brooke-cagle-9fHMo1-5Io8-unsplash.jpg";
import womenBarista from "../../../images/women_barista.jpg";
import cap from "../../../images/cap_of_coffee.png";
import coffeeThree from "../../../images/coffee_three.png";
import bookingTableImg from "../../../images/booking_table.jpg";
import parallaxImg from "../../../images/main_bg.jpg";

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const Main = () => {
  const data = useSelector((state) => state.staff.data);
  const { status } = useSelector((state) => state.staff.getData);
  const dispatch = useDispatch();

  const [ staffError, setStaffError ] = useState(css.staffErrorNone);
  const [ staffCards, setStaffCards ] = useState(css.staffCards);


  useEffect(() => {
    topFunction();
  }, []);

  useEffect(() => {
    if (!status) {
      dispatch(staffActions.getData());
    }

    if(status === "rejected" ){
      setStaffError(css.staffError)
      setStaffCards(css.staffCardsNone )
    }

  }, [ status]);

  // console.log(data, status);

  if (status === "pending") {
    return <Loader />;
  } else {
    return (
      <div className={css.mainWrapper}>
        <Parallax
          className={css.parallax}
          blur={1}
          bgImage={parallaxImg}
          bgImageAlt="the cat"
          strength={600}
        >
          <h1>The Great Coffee Good Vibes</h1>
        </Parallax>

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
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  ipsa quae abillo inventore veritatis
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

            <section className={css.staffWrapper}>
              <h2>EXPERIENCE TEAM MEMBER</h2>
              <h1>Meet Our Professional Chefs</h1>

              <div className={staffError}>
                <h1>Sorry we have a problem now</h1>
              </div>

              <div className={staffCards}>
                {data?.map((item) => {
                  return (
                    <div key={item.id} className={css.staffCard}>
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
            </section>

            {/* //////////////////////////////////////////////////////////////////// */}

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
          </main>
        </div>
      </div>
    );
  }
};

export default Main;
