import React from 'react';

import { GoToStoreButton } from '../Button'

const EmptyCart = (props) => {
  return (
    <div className="container mt-5">
    	<div className="col-10 mx-auto text-center h1">
    		Your cart is currently empty
    		<GoToStoreButton />
    	</div>
    </div>
  )
}

export default EmptyCart;