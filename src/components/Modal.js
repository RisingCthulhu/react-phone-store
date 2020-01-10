import React from 'react';
import styled from 'styled-components'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'

import { ButtonContainer } from './Button'


const Modal = props => {
  return (
    <ProductConsumer>
    	{value => {
    		const {modalOpen, closeModal, addToCart} = value
    		const { id, img, title, price, total, count } = value.modalProduct
    		
    		if (!modalOpen)
    			return null
    		else return ( 
    			<ModalContainer>
    				<div className="container">
    					<div className="row">
    						<div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center p-3 text-capitalize">
    							<h5>Item added to the cart</h5>
			    				<img src={img} alt="product" className="img-fluid" />
    							<h6>{title}</h6>
			    				<h6>Price: <span>$</span>{price}</h6>
			    				<h6>In cart: {count}</h6>
			    				<h6>Total: <span>$</span>{total}</h6>
			    				<ButtonContainer onClick={closeModal} >
			    					back to store
			    				</ButtonContainer>	
			    				<ButtonContainer onClick={() => addToCart(id)} >
			    					add one more
			    				</ButtonContainer>
			    				<Link to='/cart'>
				    				<ButtonContainer cart onClick={closeModal}>
				    					go to cart
				    				</ButtonContainer>	
			    				</Link>
    						</div>
    					</div>
    				</div>	
    			</ModalContainer>
			)
    	}
    }
    </ProductConsumer>
  )
}

export default Modal;

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
#modal {
	background: var(--mainWhite);
}	
`