import { useState } from "react";
import css from "./Reservation.module.css";
import { Parallax } from "react-parallax";
import { clear } from "@testing-library/user-event/dist/clear";

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
  const [timeError, setTimeError] = useState("");

  let verification = false;

  const validation = ({ name, phone, date, email, people, time }) => {
    if (name.length < 2) {
      setNameError("Имя слишком короткое,");
    } else {
      setNameError("");
    }

    if (!email.includes("@")) {
      setEmailError("Введите почту корректно,");
    } else {
      setEmailError("");
    }
    verification = true;
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
    validation(data);
    console.log(verification);
    console.log(data);
  };

  return (
    <div className={css.reservationWrapper}>
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
              <input
                type="number"
                placeholder="Введите кол-во человек"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
              />
            <p className={css.error}>{timeError}</p>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <button onClick={handleBookTable}>Booking table</button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
