import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
	text-transform: capitalize;
	font-size: 1.4rem;
	background: transparent;
	border: 0.05rem solid var(--lightBlue);
	border-color: ${props => props.cart ? "var(--mainYellow)" : props.navbar ? "var(--lightBlue)" : "var(--mainBlue)"};
	color: ${props => props.cart ? "var(--mainYellow)" : props.navbar ? "var(--lightBlue)" : "var(--mainBlue)"};
	border-radius: 0.5rem;
	padding: 0.2rem 0.5rem;
	margin: 0.2rem 0.5rem 0.2rem 0;
	cursor: pointer;
	transition: all 0.5s ease-in-out;
	&:hover {
		background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
		color: var(--mainBlue);
	}
	&:focus{
		outline: none;
	}
`
export const GoToStoreButton = props => {
	return (
		<Link to="/" className="text-decoration-none">
			<ButtonContainer className="mx-auto text-capitalize d-block mt-5 px-4 py-2">
				<span style={{ "fontSize": "1.75rem" }}>go to store</span>
			</ButtonContainer>
		</Link>
	)
}