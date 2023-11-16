import { useState } from "react";
import Input from "../Input";
import UserCard from "../UserCard/UserCard";
import './eddProducForm.css';
// import style from './eddProducForm.module.css';
import { v4 as uuidv4 } from 'uuid';

const DEAFAULT_P = [
	{
		nameOfProduct: 'AAAA',
		category: 'aaaaa',
		price: '11111',
		sale: '10',
		id: uuidv4(),
	},
	{
		nameOfProduct: 'BBBBBB',
		category: 'bbbbbbb',
		price: '2222222',
		sale: '10',
		id: uuidv4(),
	},
	{
		nameOfProduct: 'CCCCCC',
		category: 'ccccc',
		price: '333333',
		sale: '10',
		id: uuidv4(),
	},
	{
		nameOfProduct: 'VVVV',
		category: 'vvvvvv',
		price: '444444',
		sale: '10',
		id: uuidv4(),
	}
]
const RegistrationForm = () => {
	const [products, setProducts] = useState(DEAFAULT_P);
	const [nameOfProduct, setNameOfProduct] = useState();
	const [category, setCategory] = useState();
	const [price, setPrice] = useState();
	const [sale, setSale] = useState();


	const onAddProduct = () => {
		const product = {
			nameOfProduct,
			category,
			price,
			sale,
			id: uuidv4(),

		};
		if (product.nameOfProduct && product.category && product.price) {
			setProducts([...products, product]);
			setNameOfProduct(``);
			setCategory('');
			setPrice('');
			setSale('');
		}
		else {
			onGetRedClass(nameOfProduct)
			onGetRedClass(category)
			onGetRedClass(price)
		}
	}


	const onGetRedClass = (value) => {
		return value ? `` : `red`
	};

	const onGetName = (value) => {
		setNameOfProduct(value)
	};

	const onGetCategory = (value) => {
		setCategory(value)
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
				return product.id//чомусь вертає обєкт !
		});
		console.log(newUp)
	}

	return (
		<div className='common'>
			<h2>Add new product</h2>
			<Input label="name: " placeholder="Enter product's name" onChangeFunction={onGetName} value={nameOfProduct} />
			<Input label="category: " placeholder="Enter product's category" onChangeFunction={onGetCategory} value={category} />
			{/* <Input label="sale: " placeholder="Enter product's sale" onChangeFunction={onGetSale} value={sale} type='number' /> */}
			<Input label="price: " placeholder="Enter product's price" onChangeFunction={onGetPrice} type='number' value={price} />
			<Input label="sale: " placeholder="Enter product's sale" onChangeFunction={onGetSale} type='number' value={sale} />
			{/* <Input label="quantity: " placeholder="Enter product's quantity" onChangeFunction={onGetEmail} value={email} />  */}
			<button type="button" onClick={onAddProduct}>Add</button>
			<div className='products-list'>
				{products.map((product, index) => {
					const { nameOfProduct, category, price, sale, id } = product;
					return (<UserCard key={index} nameOfProduct={nameOfProduct} category={category} price={price} sale={sale} id={id} onDeleteProduct={onDeleteProduct} onUpdateProduct={onUpdateProduct} />)
				})}
			</div>
		</div>
	);
};

export default RegistrationForm;
