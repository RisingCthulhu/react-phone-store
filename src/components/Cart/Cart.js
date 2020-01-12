import React from 'react';

import Title from '../Title'
import { ProductConsumer } from '../../context'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotals from './CartTotals'

const Cart = props => {
  return (
    	<ProductConsumer>
    		{value => {
    			const { products } = value
    				if (products.some(product => product.inCart)) 
    					return (
	    					<React.Fragment>
	    						<div className="container mt-4 p-0">
		    						<Title name="your" title="cart" />
		    						<CartColumns />
		    						<CartList value={value} />
                                    <CartTotals value={value} history={props.history} />
	    						</div>
	    					</React.Fragment> )
    				else
    					return <EmptyCart />
    			}
    		}
    	</ProductConsumer>
  )
}

export default Cart;