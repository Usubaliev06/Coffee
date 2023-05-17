import { useState } from "react";
import css from "./Reservation.module.css";
import { Parallax } from "react-parallax";
import parallaxImg from "../../../images/reservation_bg.jpg";

import food1 from "../../../images/food1.jpg";
import food2 from "../../../images/food2.jpg";
import food3 from "../../../images/food3.jpg";
import food4 from "../../../images/food4.jpg";
import food5 from "../../../images/food5.jpg";
import { AiFillInstagram } from "react-icons/ai";

import React, { useEffect } from "react";

const Reservation = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState("");
  const [time, setTime] = useState("");

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dateError, setDateError] = useState("");
  const [peopleError, setPeopleError] = useState("");

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  const validation = ({ name, phone, date, email, people }) => {
    let verification = 0;

    if (name.length < 2) {
      setNameError("Имя слишком короткое");
    } else if (name.match(/\d+/g) !== null) {
      setNameError("Имя не дожно содержать цифры");
    } else {
      setNameError("");
      verification += 1;
    }

    if (phone.length < 9) {
      setPhoneError("Введите телефон");
    } else if (phone.match(/[a-zA-Zа-яА-Я]+/g) !== null) {
      setPhoneError("Введите телефон корректно");
    } else {
      setPhoneError("");
      verification += 1;
    }

    if (email.length < 4) {
      setEmailError("Введите почту ");
    } else if (!email.includes("@")) {
      setEmailError("Введите почту корректно");
    } else {
      setEmailError("");
      verification += 1;
    }

    if (date === "") {
      setDateError("Введите дату");
    } else if (date == "") {
      setDateError("Введите дату корректно");
    } else {
      setDateError("");
      verification += 1;
    }

    if (people === "") {
      setPeopleError("Введите кол-во человек");
    } else if (people > 6 || people < 0) {
      setPeopleError("Введите кол-во 1-6");
    } else {
      setPeopleError("");
      verification += 1;
    }
    return verification;
  };
  const handleBookTable = () => {
    const data = {
      name,
      phone,
      date,
      email,
      people,
      time,
    };
    // validation(data);

    const message = `Доброго времени суток меня зовут ${data.name}, мой номер телефона ${data.phone}, я бы хотел(а) забронировать стол на ${data.people} человек, в эту дату ${data.date} , в это  ${data.time} время`;

    console.log(validation(data));
    const key = validation(data)
    if ( key == 5) {
      document.location=`https://api.whatsapp.com/send?phone=996505545476&text=${message}`
    }
  };

  useEffect(() => {
    topFunction();
  }, []);

  return (
    <div className={css.reservationWrapper}>
      <Parallax
        className={css.parallax}
        blur={1}
        bgImage={parallaxImg}
        bgImageAlt="the cat"
        strength={600}
      >
        <h1>Reservation</h1>
      </Parallax>
      <div className="container">
        <div className={css.formWrapper}>
          <h2>BOOKING TABLE</h2>
          <h1>Make Your Reservation</h1>

          <div className={css.form}>
            <div className={css.leftForm}>
              <p className={css.error}>{nameError}</p>
              <input
                type="text"
                placeholder="Введите имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className={css.error}>{phoneError}</p>
              <input
                type="text"
                placeholder="Введите номер телефона"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <p className={css.error}>{dateError}</p>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className={css.rightForm}>
              <p className={css.error}>{emailError}</p>
              <input
                type="email"
                placeholder="Введите почту"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className={css.error}>{peopleError}</p>
              <input
                type="number"
                placeholder="Введите кол-во человек"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
              />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <button onClick={handleBookTable}>Booking table</button>
        </div>

        <div className={css.facts}>
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
        </div>

        <div className={css.inst}>
          <div className={css.instCard}>
            <div className={css.overlayInst}>
              <AiFillInstagram />
            </div>
            <a href="#">
              {" "}
              <img src={food1} alt="" />
            </a>
          </div>

          <div className={css.instCard}>
            <div className={css.overlayInst}>
              <AiFillInstagram />
            </div>
            <a href="#">
              {" "}
              <img src={food2} alt="" />
            </a>
          </div>

          <div className={css.instCard}>
            <div className={css.overlayInst}>
              <AiFillInstagram />
            </div>
            <a href="#">
              {" "}
              <img src={food3} alt="" />
            </a>
          </div>

          <div className={css.instCard}>
            <div className={css.overlayInst}>
              <AiFillInstagram />
            </div>
            <a href="#">
              {" "}
              <img src={food4} alt="" />
            </a>
          </div>

          <div className={css.instCard}>
            <div className={css.overlayInst}>
              <AiFillInstagram />
            </div>
            <a href="#">
              {" "}
              <img src={food5} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
