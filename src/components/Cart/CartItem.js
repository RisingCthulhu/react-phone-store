import React from 'react';

const CartItem = ({product, addToCart, removeFromCart, decreaseCount}) => {
  const { id, title, img, price, total, count } = product
  return (
    <div className="row mb-4 text-capitalize text-center border mx-auto">
    	<div className="col-10 col-md-2 m-auto">
    		<img src={img} alt="product" className="img-fluid" style={{width: '5rem', heigth: '5rem'}} />
    	</div>
    	<div className="col-10 col-md-2 m-auto">
    		<span className="d-md-none">product: </span> {title}
    	</div>
    	<div className="col-10 col-md-2 m-auto">
    		<span className="d-md-none">price: </span> {price}
    	</div>
    	<div className="col-10 col-md-2 m-auto">
    		<div className="d-flex justify-content-center">
    			<span className="btn cart-quantity-btn mx-1" onClick={() => decreaseCount(id)} >-</span>
    			<span className="btn cart-quantity mx-1" >{count}</span>
    			<span className="btn cart-quantity-btn mx-1" onClick={() => addToCart(id)} >+</span>
    		</div>
    	</div>
    	<div className="col-10 col-md-2 m-auto">
    		total: ${total}
    	</div>
    	<div className="col-10 col-md-2 m-auto cart-icon" onClick={() => removeFromCart(id)} >
    		remove <i className="fas fa-trash"></i>
    	</div>
    </div>
  )
}

export default CartItem;