import React from "react";
import "../Components/Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <div className="nav">
        <a href="/home">
          <img
            src="..\Temporary-Logo.png"
            alt="Foodbank Logo"
            className="logo"
            width="50"
          />
        </a>

        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="/itworks">How It Works</a>
          </li>

          <li>
            <a href="/givesupport">Give Support</a>
          </li>

          <li>
            <a href="/getsupport">Get Support</a>
          </li>

          <li>
            <a href="/recipes">Recipe Book</a>
          </li>

          <li>
            <a href="/aboutus">About Project</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
