import React from 'react';

import PayPalButton from './PayPalButton'

const CartTotals = ({value, history}) => {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value
  return (
    <React.Fragment>
    	<div className="container">
    		<div className="row">
    			<div className="col-10 mb-3 mx-auto ml-md-auto col-md-12 text-capitalize text-center text-md-right">
					<button className="btn btn-outline-danger text-uppercase mb-3 px-5" onClick={() => clearCart()}>
						clear cart
					</button>
					<h5>
						subtotal: <span><strong>${cartSubtotal}</strong></span>
					</h5>
					<h5>
						tax: <span><strong>${cartTax}</strong></span>
					</h5>
					<h5>
						total: <span><strong>${cartTotal}</strong></span>
					</h5>
					<PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
    			</div>
    		</div>
    	</div>
    </React.Fragment>
  )
}

export default CartTotals;