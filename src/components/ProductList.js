import React from 'react';

import Product from './Product'
import Title from './Title'
import { ProductConsumer } from '../context.js'

class ProductList extends React.Component {
    render() {
    	return (
	        <React.Fragment>
	        	<div className="container py-5">
	        		<Title name="our" title="products" />
	        		<div className="row">
	        			<ProductConsumer>
	        				{value => 
	        					value.products.map(product => <Product 
	        						key={product.id} 
	        						product={product} 
	        						handleDetail = {value.handleDetail}
	        						addToCart = {value.addToCart}
	        						openModal = {value.openModal}
	        						/> )
	        				}
	        			</ProductConsumer>
	        		</div>	
	        	</div>
	        </React.Fragment>
    	);
    }
};

export default ProductList;

