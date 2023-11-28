import { useState, useContext } from "react";
import { UsersContext } from "../../App";
import Input from "../Input";
import UserCard from "../UserCard/UserCard";
import './eddProducForm.css';
// import  ClassName from 'ClassName'; //бібліотека, додаємо кілька класів
// import {isEmpty} from 'lodash';//чи пустий
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
	const [buttonSaveProductFlag, setbuttonSaveProductFlag] = useState(false);
	const [getIdForSave, setGetIdForSave] = useState();

	const { setUsersCount, setProductMaxLenghtName } = useContext(UsersContext)


	function maxLenghtWord(products) {
		let maxLenghtWord = 0
		let maxLenghtWordName = ''
		let arrMaxLenghtWordsName = '';
		// let arrMaxLenghtWordsName = [];
		products.map((element) => {
			if (element.nameOfProduct.length > maxLenghtWord) {
				maxLenghtWord = element.nameOfProduct.length
				maxLenghtWordName = element.nameOfProduct
			}

		})
		products.map((element) => {
			if (element.nameOfProduct.length === maxLenghtWordName.length) {
				arrMaxLenghtWordsName += element.nameOfProduct + ' '
				// arrMaxLenghtWordsName.push(element.nameOfProduct)
			}

		})

		return arrMaxLenghtWordsName;
	}

	// setProductMaxLenghtName
	console.log(maxLenghtWord(products));







	setUsersCount(products.length);
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


	const onGetIdForSave = (value) => {
		setGetIdForSave(value)
	};

	const onGetbuttonSaveProductFlag = (value) => {
		setbuttonSaveProductFlag(value)
	};
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
		setProducts(products.filter((product) => product.id !== id))
	}
	const returnToAdd = (id) => {
		setNameOfProduct(``);
		setImage('');
		setPrice('');
		setSale('');
		setbuttonSaveProductFlag(false)
	}
	const onSaveProduct = () => {
		products.map((product) => {
			if (product.id === getIdForSave) {
				product.nameOfProduct = nameOfProduct;
				product.image = image;
				product.price = price;
				product.sale = sale;

				return
			}

		})

		setProducts(products)
		onGetName('');
		onGetImage('');
		onGetPrice('');
		onGetSale('');
		setredClassFlag('')

	}

	const onUpdateProduct = (el) => {
		let newUp = products.filter((product) => {

			if (product.id === el) {
				onGetbuttonSaveProductFlag(true)
				return product;
			}

		});
		if (newUp.length > 0) {
			console.log(newUp[0].id);
			onGetName(newUp[0].nameOfProduct)
			onGetImage(newUp[0].image)
			onGetPrice(newUp[0].price)
			onGetSale(newUp[0].sale)
			onGetIdForSave(el)
			// console.log(nameOfProduct);
		}
		else {
			return
		}
	}

	const editProductTitle = () => {
		let title
		products.map((product) => {
			if (product.id === getIdForSave) {
				title = product.nameOfProduct
				return
			}
		})
		return title
	}




	return (
		<div className='common'>
			{
				buttonSaveProductFlag ? <h2 className="edit-product">Edit product - {editProductTitle()} </h2> : <h2>Add new product</h2>
			}
			<div className="add-new-product-panel">
				<Input classNameFlag={redClassFlag} label="name: " placeholder="Enter product's name" onChangeFunction={onGetName} value={nameOfProduct} />
				<Input classNameFlag={redClassFlag} label="image: " placeholder="Enter product's image url" onChangeFunction={onGetImage} value={image} />
				<Input classNameFlag={redClassFlag} label="price: " placeholder="Enter product's price" onChangeFunction={onGetPrice} type='number' value={price} />
				<Input label="sale: " placeholder="Enter product's sale" onChangeFunction={onGetSale} type='number' value={sale} />

			</div>
			{
				buttonSaveProductFlag ? <div><button className="add-product-item" type="button" onClick={onSaveProduct}>save product</button> <button className="add-product-item" type="button" onClick={returnToAdd}>return to add mode</button></div> : <button className="add-product-item" type="button" onClick={onAddProduct}>add</button>
			}
			<hr />
			<div className='products-list'>
				{

					products.map((product, index) => {
						const { nameOfProduct, image, price, sale, id } = product;
						return (<UserCard key={index} nameOfProduct={nameOfProduct} image={image} price={price} sale={sale} id={id} onDeleteProduct={onDeleteProduct} onUpdateProduct={onUpdateProduct} />)

					})

				}
			</div>
		</div >
	);
};

export default RegistrationForm;
