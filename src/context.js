import React, { Component } from 'react';

import { storeProducts } from './data.js'

const ProductContext = React.createContext();
//Provider
//Consumer
	
JSON.parse(localStorage.getItem('products')) ?   
localStorage.setItem('products', JSON.stringify(JSON.parse(localStorage.getItem('products')))) :
localStorage.setItem('products', JSON.stringify(storeProducts))

const cartDefault = []
JSON.parse(localStorage.getItem('cart')) ? 
localStorage.setItem('cart', JSON.stringify(JSON.parse(localStorage.getItem('cart')))) : 
localStorage.setItem('cart', JSON.stringify(cartDefault))

class ProductProvider extends Component {
	state = {
		products: [],
		detailProduct: JSON.parse(localStorage.getItem('detailProduct')),
		cart: JSON.parse(localStorage.getItem('cart')),
		modalProduct: {},
		modalOpen: false
	}
	componentDidMount() {  
		this.setProducts()
	}
	setProducts = () => {
		let products = [];
		JSON.parse(localStorage.getItem('products')).forEach(product => {
			const productCopy = {...product};
			products = [...products, productCopy]
			this.setState( () => { return { products: products } } )
		})
	}

	getProduct = id => this.state.products.find(item => item.id === id)

	handleDetail = id => {
		const product = this.getProduct(id);
		localStorage.setItem('detailProduct', JSON.stringify(product))
		this.setState({
			detailProduct: JSON.parse(localStorage.getItem('detailProduct'))
		})
	}
	addToCart = id => {
		let product = this.getProduct(id)
		product.total += product.price
		product.count++
		product.inCart = true
		localStorage.setItem('products', JSON.stringify(this.state.products))
		this.setState(() => {
			return {
				products: JSON.parse(localStorage.getItem('products'))
			} // починить, не реагирует на нажатие, возможно потому что корзина смотрит не на свои объекты, cart, 
			// а на products. так же возможно нужно часть с обновлением корзины доработать, т.к. удаляет корректно
		})
	//	localStorage.setItem('cart', JSON.stringify(this.state.cart))
	}
	openModal = id => {
		const product = this.getProduct(id)
		this.setState( () => {
			return {
				modalProduct: product,
				modalOpen: true
			}
		})	
	}
	closeModal = () => {
		this.setState(() => {
				return {
					modalOpen: false
			} 
		})
	}
	decreaseCount = id => { // починить, не реагирует на нажатие, возможно потому что корзина смотрит не на свои 
		// объекты, cart, а на products. так же возможно нужно часть с обновлением корзины доработать, т.к. удаляет корректно
		let product = this.getProduct(id)
		product.total -= product.price
		product.count--
		product.count === 0 ? product.inCart = false : product.inCart = true
		localStorage.setItem('products', JSON.stringify(this.state.products))
		this.setState(() => {
				return {
					cart: JSON.parse(localStorage.getItem('products'))
				}
			})

	//	localStorage.setItem('cart', JSON.stringify(this.state.cart))
	}
	removeFromCart = id => {
		let product = this.getProduct(id)
		product.total = 0
		product.count = 0 // закончил здесь
		product.inCart = false
		localStorage.setItem('products', JSON.stringify(this.state.products))
		console.log([...this.state.cart].filter(product => product.id !== id))
		this.setState(() => {
			return {
				cart: [...this.state.cart].filter(product => product.id !== id)
			}
		})
		localStorage.setItem('cart', JSON.stringify(this.state.cart))
	}
	clearCart = () => {

	}

	render() {
		return (
			<ProductContext.Provider value={{
				...this.state, 
				handleDetail: this.handleDetail,
				addToCart: this.addToCart,
				openModal: this.openModal,
				closeModal: this.closeModal,
				decreaseCount: this.decreaseCount,
				removeFromCart: this.removeFromCart,
				clearCart: this.clearCart
			}} >
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };