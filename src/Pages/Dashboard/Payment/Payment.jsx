import React from "react";
import SectionTitle from "../../../Componets/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
  const stripePromise = loadStripe("");
  return (
    <div>
      <SectionTitle
        heading="payment"
        subHeading="Please Pay For Food"
      ></SectionTitle>

      <div>
        <Elements stripe={stripePromise}></Elements>
      </div>
    </div>
  );
};

export default Payment;
