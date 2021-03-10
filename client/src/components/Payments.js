import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index'
import StripeCheckout from 'react-stripe-checkout'


const Payments = props => {
    return (
        <div>
            <StripeCheckout 
                amount={500}
                name="Emaily"
                description="$5 for 5 email credits"
                token={token => props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}>

                <button className='btn'>Add Credits</button>

            </StripeCheckout>
        </div>
    );
}

export default connect(null, actions)(Payments);
