import React, { Component } from 'react';

import { storeProducts } from './data.js'

const ProductContext = React.createContext();
//Provider
//Consumer
	
JSON.parse(localStorage.getItem('products')) ?   
localStorage.setItem('products', JSON.stringify(JSON.parse(localStorage.getItem('products')))) :
localStorage.setItem('products', JSON.stringify(storeProducts))


class ProductProvider extends Component {
	state = {
		products: [],
		detailProduct: JSON.parse(localStorage.getItem('detailProduct')),
		modalProduct: {},
		modalOpen: false,
		cartSubtotal: JSON.parse(localStorage.getItem('totals')).subtotal,
		cartTax: JSON.parse(localStorage.getItem('totals')).tax,
		cartTotal: JSON.parse(localStorage.getItem('totals')).totals
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
			}
		})
		this.state.modalProduct && this.setState(() => { return {modalProduct: product}})
		this.addTotals()
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
	decreaseCount = id => {
		let product = this.getProduct(id)
		product.total -= product.price
		product.count--
		product.count === 0 ? product.inCart = false : product.inCart = true
		localStorage.setItem('products', JSON.stringify(this.state.products))
		this.setState(() => {
				return {
					products: JSON.parse(localStorage.getItem('products'))
				}
			})
		this.addTotals()
	}
	removeFromCart = id => {
		let product = this.getProduct(id)
		product.total = 0
		product.count = 0 // закончил здесь
		product.inCart = false
		localStorage.setItem('products', JSON.stringify(this.state.products))
		this.setState(() => {
			return {
				products: JSON.parse(localStorage.getItem('products'))
			}
		})
		this.addTotals()
	}
	clearCart = () => {
		let products = [...this.state.products]
		products.forEach(product => {
			product.count = 0
			product.total = 0
			product.inCart = false
		})
		localStorage.setItem('products', JSON.stringify(products))
		this.setState(() => {
			return {
				products: JSON.parse(localStorage.getItem('products'))
			}
		})
		this.addTotals()
	}
	addTotals = () => {
		let subtotal = 0
		this.state.products.forEach(product => {
			subtotal += product.total
		})
		let tax = parseFloat((subtotal * 0.1).toFixed(2))
		let total = subtotal + tax
		localStorage.setItem('totals', JSON.stringify({ subtotal: subtotal, tax: tax, total: total}))
		this.setState(() => {
			return {
				cartSubtotal: JSON.parse(localStorage.getItem('totals')).subtotal,
				cartTax: JSON.parse(localStorage.getItem('totals')).tax,
				cartTotal: JSON.parse(localStorage.getItem('totals')).total
			}
		})
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