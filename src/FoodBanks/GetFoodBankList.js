import React from "react";
import "../FoodBanks/GetFoodBankList.css";

function GetFoodBankList({ name, address, phone, website, email, needs }) {
  return (
          <div className="foodBankCard">
            <h5 className="foodbankName">
              <a href={website} target="_blank">{name}</a>
            </h5>
            <p className="foodbankAddress">{address}</p>
            <p className="foodbankPhone">{phone}</p>
            <a className="foodbankEmail"href={"mailto:" + email}>{email}</a>
           
          </div>
      
   
  
  );
}

export default GetFoodBankList;
