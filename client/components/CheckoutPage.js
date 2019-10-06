import React from 'react'
import {Elements, StripeProvider} from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

const CheckoutPage = () => (
  // !! TODO update to a new stripe provider wth an account
  <StripeProvider apiKey="pk_test_1qaUi7WeeHsg14IziLUiZcgq">
    <div className="example">
      <h1>React Stripe Elements Example</h1>
      <Elements>
        <CheckoutForm />
      </Elements>
    </div>
  </StripeProvider>
)

export default CheckoutPage
