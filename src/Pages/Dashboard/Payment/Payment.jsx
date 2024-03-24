import React from "react";
import SectionTitle from "../../../Componets/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const Payment = () => {
  
  return (
    <div>
      <Helmet>
            <title>Suger Bistro | Payment </title>
        </Helmet>
      <SectionTitle
        heading="payment"
        subHeading="Please Pay For Food"
      ></SectionTitle>

      <div>
        <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
