import React, { Fragment } from "react";
import "../Components/Footer.css";

const iconEntity = <Fragment>&#169;</Fragment>;
const numeroEntity = <Fragment>&#8470;</Fragment>;
const starEntity = <Fragment>&#10803;</Fragment>;

function Footer() {
  return (
    <footer className="footer">
      <div className="bottom">
        <p>
          Copyright {iconEntity} 2021.{""}
          <a href="https://github.com/sofia-kakembo/Food-Bank-Website.git">A Group {numeroEntity} 04 Project</a> {starEntity} Made by
          <a href="http://estherboateng.co.uk/">Esther Agyare-Boateng</a>, Jamie Farrell-More & Sofia Kakembo {starEntity}
        </p>
      </div>
    </footer>
  );
}

export default Footer;