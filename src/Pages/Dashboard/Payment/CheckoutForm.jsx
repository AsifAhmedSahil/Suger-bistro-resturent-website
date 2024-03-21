import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";


const CheckoutForm = () => {
  const [error,setError] = useState()
  const [clientSecret,setClientSecret] = useState()
  const [transactionId,setTransectionId] = useState()
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure()
  const [cart] = useCart()
  const {user} = useAuth()
  
  const totalPrice = cart.reduce((total,item)=> total+item.price,0)
  console.log("total price under checkout form",totalPrice);

  

  useEffect(()=>{
    axiosSecure.post('/create-payment-intent',{price:totalPrice})
    .then(res =>{
      console.log("client secret under payment",res.data.clientSecret);
      setClientSecret(res.data.clientSecret)
    })

  },[axiosSecure,totalPrice])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const {error,paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if (error) {
      console.log('payment error', error);
      setError(error.message)
    } 
    else {
      console.log('[PaymentMethod]', paymentMethod);
      setError("")
    }

    const {paymentIntent,error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous'
        }
      }
    })

    if(confirmError){
      console.log("confirm error" )
    }
    else{
      console.log('payment intent',paymentIntent)
      if(paymentIntent.status === 'succeeded'){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Payment has been completed",
          showConfirmButton: false,
          timer: 1000
        });
        setTransectionId(paymentIntent.id);

        // now save to the dattabase ***
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: cart.map(item => item._id),
          menuItemIds: cart.map(item => item.menuId),
          status: 'pending'
        }

        const res = await axiosSecure.post('/payment',payment)
        console.log("payment save",res.data)
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn mt-8 rounded-lg bg-black text-white hover:text-black" type="submit" disabled={!stripe || !clientSecret}>
        {/* <button className="btn rounded-lg bg-black text-white hover:text-black" type="submit" > */}
          Pay
        </button>
      </form>

      <p className="text-red-600">{error}</p>
      {
        transactionId && <p className="text-green-600 mt-8">Your Transaction Id is: {transactionId}</p>
      }
    </div>
  );
};

export default CheckoutForm;
