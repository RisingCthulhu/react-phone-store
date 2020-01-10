import React from 'react';
import { Link } from 'react-router-dom'

import { ProductConsumer } from '../context'
import { ButtonContainer } from './Button'

const Details = props => {
  return (
    <ProductConsumer>
    		{
    			value => {
    				const { id, title, img, price, info, company, count, inCart} = value.detailProduct;
    				return (
    					<div className="container py-5">
    						{/* title */}
							<div className="row">
								<div className="col-10 mx-auto text-center text-slanted text-blue-my-5">
									<h1>{title}</h1>
								</div>	
							</div>
							{/* end title */}
    						{/* product info */}
    						<div className="row">
	    						<div className="col-10 col-md-6 my-3 text-center">
	    							<img src={img} className="img-fluid" alt="product"/>
	    						</div>
	    						{/* product text */}
	    						<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
	    							<h4 className="text-title text-uppercase text-muted">manufacturer : {company}</h4>
	    							<h4 className="text-blue">price : <span>$</span>{price}</h4>
	    							<h4 className="text-blue">additional information:</h4>
	    							<p className="text-muted lead">{info}</p>
	    							{/* buttons */}
	    							<div>
	    								<Link to='/' className="mr-3">
	    									<ButtonContainer>back to products</ButtonContainer>
	    								</Link>
	    								<ButtonContainer 
	    									cart 
	    									onClick={() => {
	    										value.addToCart(id)
	    										value.openModal(id)
	    										}
	    									}
	    									>
	    									{inCart ? `${count} In Cart` : "Add To Cart"}
    									</ButtonContainer>
	    							</div>
	    						</div>
	    					</div>
    					</div>	
    				)}
    		}
    </ProductConsumer>
  )
}

export default Details;