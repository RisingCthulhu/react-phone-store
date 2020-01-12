import React from 'react';
import { Link } from 'react-router-dom'

import { ButtonContainer } from '../Button'

const EmptyCart = (props) => {
  return (
    <div className="container mt-5">
    	<div className="col-10 mx-auto text-center h1">
    		Your cart is currently empty
    		<Link to="/" className="text-decoration-none">
    			<ButtonContainer className="mx-auto text-capitalize d-block mt-5 px-4 py-2">
    				<span style={{ "fontSize": "1.75rem" }}>go to store</span>
    			</ButtonContainer>
    		</Link>
    	</div>
    </div>
  )
}

export default EmptyCart;