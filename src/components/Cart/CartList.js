import React from 'react';

import CartItem from './CartItem'

const CartList = ({value}) => {
	const { products, addToCart, removeFromCart, decreaseCount } = value
	return (
	<div className="container-fluid">
		 {products.map(product => {
		 	if (product.inCart) 
		 		return <CartItem 
					key={product.id}
				 	product={product} 
				 	addToCart={addToCart} 
				 	removeFromCart={removeFromCart} 
				 	decreaseCount={decreaseCount} 
		 		/>

		 	return null	
		 	})
		}
	</div>
	)
}

export default CartList;