import React from 'react'
import "./ItWorks.css"

function ItWorks() {
    return (
          
<div className="mainSection">
      <h1 className="heading">How It Works</h1>

      <img className="images" src="./how-it-works.png" alt="Groceries" />

      <p className="how-it-works">
        Welcome to this Food Bank Search website, where you can{" "}
        <strong>GIVE</strong> and <strong>GET</strong> emergency support.
        Powered by the GIVE Food API, the aim of this website is to enable you
        to find your closest Food Bank. You can search via your postcode or by
        looking where an item is needed: by you or your Food Bank.
        <br />
        <br />
        Due to the constantly changing nature of stock levels at Food Banks, do
        contact them before setting off on your journey to:
        <ul>
          <li>Check their opening hours and</li>
          <li>
            If the item you wish to <strong>GIVE</strong> is still required or
          </li>
          <li>
            If the item you wish to <strong>GET</strong> is still in stock.
          </li>
        </ul>
      </p>

      <div className="buttons">
        <button>
          <a href="/givesupport">Give Support</a>
        </button>
        <button>
          <a href="/getsupport">Get Support</a>
        </button>
      </div>
    </div>
    )
}

export default ItWorks
