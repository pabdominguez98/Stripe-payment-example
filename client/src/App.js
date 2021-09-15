import React, {useState} from 'react'
import {loadStripe} from '@stripe/stripe-js';
import {Elements, CardElement, useStripe} from '@stripe/react-stripe-js';
import './App.css';

const stripePromise = loadStripe("pk_test_51JZzFQEcGh0FnCKrg4MpbbNW9DbhmTR2a8ALSmUZ2gQoHfxyk4X5H9pvIsJRW9cb83BzlHj82rnBVvHQjc2huotd00qIga7TJZ")

const CheckOut = () => {
   const [value, setValue] = useState([])
   const handleSubmit = (e) => {
      e.preventDefault()

   }
   return(
     <form onSubmit={handleSubmit}>
       <CardElement />
       <button>
         Buy
       </button>
     </form>
   )
}

function App() {
  return (
    <div className="App">
      <Elements stripe={stripePromise}>
         <CheckOut />
      </Elements>
    </div>
  );
}

export default App;
