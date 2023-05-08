import React, { useEffect } from "react";
import css from "./NotFound.module.css";

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const NotFound = () => {

  useEffect(() => {
    topFunction();
  }, []);
  return (
    
    <div className={css.notFoundWrapper}>
      <div className={css.error}>404</div>
      <br />
      <br />
      <span className={css.info}>File not found</span>
      </div>
    
  );
};

export default NotFound;
