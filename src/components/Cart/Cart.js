import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Title from '../Title'
import { ProductConsumer } from '../../context'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'

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