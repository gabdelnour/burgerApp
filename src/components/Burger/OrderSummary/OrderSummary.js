import React from "react";

import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    (igKey, index) => {
      return (
        <li key={index}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {props.ingredients[igKey]}
        </li>
      );
    }
  );
  return (
    <>
      <h3>Your Order Summary</h3>
      <p>Your burger includes the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout</p>
      <p>
        <strong>Your Total Price is: ${props.totalPrice.toFixed(2)}</strong>
      </p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </>
  );
};

export default OrderSummary;
