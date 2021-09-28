import React from "react";
import "../FoodBanks/FoodBank.css";

function FoodBank({ name, address, phone, website, email, needs }) {
  return (
   
          <div className="foodBankCard">
            <h3 className="foodbankName">
              <a href={website} target="_blank">{name}</a>
            </h3>
            <p className="foodbankAddress">{address}</p>
            <p className="foodbankPhone">{phone}</p>
            <a href={"mailto:" + email}>{email}</a>
            <ul className="foodbankNeeds">
              <h5>Needs</h5>
              {[needs].map((need) => (
                <li>{need}</li>
              ))}
            </ul>
          </div>
      
   
  
  );
}

export default FoodBank;
