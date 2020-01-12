import React from 'react';

import { GoToStoreButton } from './Button'

const Default = props => {
  return (
    <div className="container mx-auto text-center text-uppercase pt-5">
    	<h1>404<br /> error</h1>
    	<h2>page not found</h2>
    	<h3>
    		the requested url 
    		<span className="text-danger"> {window.location.href} </span>
    		not found
    	</h3>
    	<GoToStoreButton />
    </div>	
  )
}

export default Default;