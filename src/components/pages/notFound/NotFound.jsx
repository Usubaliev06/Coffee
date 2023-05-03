import React from "react";
import css from "./NotFound.module.css";

const NotFound = () => {
  return (
    
    <div className={css.notFoundWrapper}>
      <div class={css.error}>404</div>
      <br />
      <br />
      <span class={css.info}>File not found</span>
      </div>
    
  );
};

export default NotFound;
