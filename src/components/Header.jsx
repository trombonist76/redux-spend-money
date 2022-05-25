import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  // const currentBillionaire = useSelector(
  //   (state) => state.billionaires.currentBillionaire
  // );
  const currentBillionaire = JSON.parse(localStorage.getItem("currentBillionaire")) 
  const money = useSelector(
    (state) => state.wallet.money
  );
  console.log(currentBillionaire);
  return (
    <header className="header">
      <div className="billionaireContent">
        SPEND <b>{currentBillionaire.personName.toUpperCase().split(" &")[0]}'S</b> MONEY
      </div>
      <div className="worth">
        <strong>{money.toLocaleString()} $</strong>
      </div>

      <div>
        <Link component={<button/>}to="/">Back to  Billionaires</Link>
      </div>

      {/* <img
        src={currentBillionaire.person.squareImage}
        alt={currentBillionaire.personName}
        className="billionaireImage"
        style={{ width: 80, height: 80 }}
      /> */}
    </header>
  );
}
