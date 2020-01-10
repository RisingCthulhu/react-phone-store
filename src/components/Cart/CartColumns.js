import React from 'react';

const CartColumns = props => {
  return (
    <div className="container-fluid text-center d-none d-md-block mt-4">
    	<div className="row">
    		<div className="col-10 mx-auto col-md-2">
    			<p className="text-uppercase">products</p>
    		</div>
    		<div className="col-10 mx-auto col-md-2">
    			<p className="text-uppercase">name</p>
    		</div>
    		<div className="col-10 mx-auto col-md-2">
    			<p className="text-uppercase">price</p>
    		</div>
    		<div className="col-10 mx-auto col-md-2">
    			<p className="text-uppercase">quantity</p>
    		</div>
    		<div className="col-10 mx-auto col-md-2">
    			<p className="text-uppercase">total</p>
    		</div>
    		<div className="col-10 mx-auto col-md-2">
    		</div>
    	</div>
    </div>
  )
}

export default CartColumns;