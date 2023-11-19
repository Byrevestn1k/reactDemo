import { useState } from "react";
import Input from "../Input";
import UserCard from "../UserCard/UserCard";
import './eddProducForm.css';
// import style from './eddProducForm.module.css';
import { v4 as uuidv4 } from 'uuid';

const DEAFAULT_P = [
	{
		nameOfProduct: 'AAAA',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwuDUI0zYOoQcOyVbJ49SFZlYpFNssk8PdkY1becjiuxA7LiP6XzF8LS8REob6iqWip5E&usqp=CAU',
		price: '11111',
		sale: '10',
		id: uuidv4(),
	},
	{
		nameOfProduct: 'BBBBBB',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYU0aTO98cv0QHOWvIvYQYjKkS-vlWWzuYifBdiUUtsY_-pGIVg4oAlpN6beOASqkaz1o&usqp=CAU',
		price: '2222222',
		sale: '10',
		id: uuidv4(),
	},
	{
		nameOfProduct: 'CCCCCC',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzomlcJUBoOjm_1pPps9X4InpiHNQcWyIv4IFho6PfdhJgkJi0ZBCaCKOs_DC34agENX8&usqp=CAU',
		price: '333333',
		sale: '10',
		id: uuidv4(),
	},
	{
		nameOfProduct: 'CCCCCC',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzomlcJUBoOjm_1pPps9X4InpiHNQcWyIv4IFho6PfdhJgkJi0ZBCaCKOs_DC34agENX8&usqp=CAU',
		price: '333333',
		sale: '',
		id: uuidv4(),
	},
	{
		nameOfProduct: 'VVVV',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqjnE1nMn0ZsmuJmi1opvZwd1W5nOdn5PBcAFnddcPDexG7dCWPL1y-KPPGOUiPcQOK1M&usqp=CAU',
		price: '444444',
		sale: '10',
		id: uuidv4(),
	}
]
const RegistrationForm = () => {
	const [products, setProducts] = useState(DEAFAULT_P);
	const [nameOfProduct, setNameOfProduct] = useState();
	const [image, setImage] = useState();
	const [price, setPrice] = useState();
	const [sale, setSale] = useState();
	const [redClassFlag, setredClassFlag] = useState(false);

	const onAddProduct = () => {
		const product = {
			nameOfProduct,
			image,
			price,
			sale,
			id: uuidv4(),

		};

		if (product.nameOfProduct && product.image && product.price) {
			setProducts([...products, product]);
			setNameOfProduct(``);
			setImage('');
			setPrice('');
			setSale('');
			setredClassFlag(false)
		}
		else {
			setredClassFlag(true)
		}
	}





	const onGetName = (value) => {
		setNameOfProduct(value)
	};

	const onGetImage = (value) => {
		setImage(value)
	}

	const onGetPrice = (value) => {
		setPrice(value)
	}
	const onGetSale = (value) => {
		setSale(value)
	};

	const onDeleteProduct = (id) => {
		console.log(id);

		setProducts(products.filter((product) => product.id !== id))
	}

	const onUpdateProduct = (el) => {
		let newUp = products.map((product) => {
			console.log(el)
			if (product.id === el)
				return product.id//чомусь вертає обєктп !
		});
		console.log(newUp)
	}

	return (
		<div className='common'>
			<h2>Add new product</h2>
			<div className="add-new-product-panel">
				<Input classNameFlag={redClassFlag} label="name: " placeholder="Enter product's name" onChangeFunction={onGetName} value={nameOfProduct} />
				<Input classNameFlag={redClassFlag} label="image: " placeholder="Enter product's image url" onChangeFunction={onGetImage} value={image} />
				<Input classNameFlag={redClassFlag} label="price: " placeholder="Enter product's price" onChangeFunction={onGetPrice} type='number' value={price} />
				<Input label="sale: " placeholder="Enter product's sale" onChangeFunction={onGetSale} type='number' value={sale} />

			</div>
			<button className="add-product-item" type="button" onClick={onAddProduct}>Add</button>
			<hr />
			<div className='products-list'>
				{products.map((product, index) => {
					const { nameOfProduct, image, price, sale, id } = product;
					return (<UserCard key={index} nameOfProduct={nameOfProduct} image={image} price={price} sale={sale} id={id} onDeleteProduct={onDeleteProduct} onUpdateProduct={onUpdateProduct} />)
				})}
			</div>
		</div >
	);
};

export default RegistrationForm;
