import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
const CheckoutSummary = () => {
  return (
    <div>
      <h1>We Hope it tastes GOOD!</h1>
      <div style={{ width: "300px", height: "300px", margin: "auto" }}>
        <Burger ingredients={PaymentResponse.ingredients} />
      </div>
      <Button btnType="Danger" clicked={}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
