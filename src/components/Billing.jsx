import React from "react";
import { useDispatch, useSelector } from "react-redux";
import nFormatter from "../numPrettier";
import { IoMdClose } from "react-icons/io";
import { removeAllAmount } from "../redux/productsSlice";

export default function Billing() {
  let cart = useSelector((state) =>
    state.products.items.filter((item) => item.amount > 0)
  );
  const dispatch = useDispatch();

  const handleRemove = (cartItem) => {
    dispatch(removeAllAmount(cartItem));
  };
  return (
    <div className="billing">
      <h3>Your Billings</h3>
      {cart.map((cartItem, index) => (
        <div key={index} className="cartItem">
          <div className="itemTitle">
            <b style={{ color: "green" }}>{cartItem.amount}</b> x{" "}
            {cartItem.title}
          </div>
          <div className="itemPrice">
            - $ {nFormatter(cartItem.amount * cartItem.price, 2)}
          </div>
          <div className="itemRemove">
            <IoMdClose onClick={() => handleRemove(cartItem)} />
          </div>
        </div>
      ))}
      {cart.length > 0 && (
        <div className="total">
          <h3>TOTAL</h3>
          <div>
            <b style={{color:"red"}}>
              - $ {nFormatter(cart.reduce((total, curr ) => total + (curr.price * curr.amount),0),3)}
            </b>
          
          </div>
        </div>
      )}
    </div>
  );
}
