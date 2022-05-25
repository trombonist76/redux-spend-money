import React from "react";
import Billing from "./Billing";
import Header from "./Header";
import Products from "./Products";

export default function SpendMoney() {
  return (
    <div className="spendMoney">
      <Header />
      <div className="productsBilling">
        <Billing />
        <Products />
      </div>
    </div>
  );
}
