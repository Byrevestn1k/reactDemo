import { useState, useContext, useEffect } from "react";
// import { UsersContext } from "../../App";
import Input from "../Input";
import UserCard from "../UserCard/UserCard";
import './registrationForm.css';
// import  ClassName from 'ClassName'; //бібліотека, додаємо кілька класів
// import {isEmpty} from 'lodash';//чи пустий
// import style from './eddProducForm.module.css';
import { v4 as uuidv4 } from 'uuid';
import QueryLoader from "../QueryLoader";


const RegistrationForm = () => {

	const [users, setUsers] = useState([]);
	const [name, setname] = useState();
	const [username, setusername] = useState();
	const [email, setemail] = useState();
	const [phone, setphone] = useState();
	const [redClassFlag, setredClassFlag] = useState(false);
	const [buttonSaveProductFlag, setbuttonSaveProductFlag] = useState(false);
	const [getIdForSave, setGetIdForSave] = useState();
	// const { setUsersCount, setProductMaxLenghtName } = useContext(UsersContext)
    const [fetching, setFetching] = useState(false)
	// const [numberOfpage, setNumberOfpage] = useState(1)
    const [fetchError, setFetchError] = useState(null);
    
    
    
	function maxLenghtWord(users) {
		let maxLenghtWord = 0
		let maxLenghtWordName = ''
		let arrMaxLenghtWordsName = '';
		// let arrMaxLenghtWordsName = [];
		users.map((element) => {
			if (element.name.length > maxLenghtWord) {
				maxLenghtWord = element.name.length
				maxLenghtWordName = element.name
			}

		})
		users.map((element) => {
			if (element.name.length === maxLenghtWordName.length) {
				arrMaxLenghtWordsName += element.name + ' '
				// arrMaxLenghtWordsName.push(element.name)
			}

		})

		return arrMaxLenghtWordsName;
	}

	const onAddProduct = () => {
		const product = {
			name,
			username,
			email,
			phone,
			id: uuidv4(),
		};

		if (product.name && product.username && product.email) {
			setUsers([...users, product]);
			setname(``);
			setusername('');
			setemail('');
			setphone('');
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
		setname(value)
	};

	const onGetusername = (value) => {
		setusername(value)
	}

	const onGetemail = (value) => {
		setemail(value)
	}

	const onGetphone = (value) => {
		setphone(value)
	};

	const onDeleteProduct = (id) => {
		setUsers(users.filter((product) => product.id !== id))
	}

	const returnToAdd = (id) => {
		setname(``);
		setusername('');
		setemail('');
		setphone('');
		setbuttonSaveProductFlag(false)
	}

	const onSaveProduct = () => {
		users.map((product) => {
			if (product.id === getIdForSave) {
				product.name = name;
				product.username = username;
				product.email = email;
				product.phone = phone;

				return
			}

		})

		setUsers(users)
		onGetName('');
		onGetusername('');
		onGetemail('');
		onGetphone('');
		setredClassFlag('')

	}

	const onUpdateProduct = (el) => {
		let newUp = users.filter((product) => {

			if (product.id === el) {
				onGetbuttonSaveProductFlag(true)
				return product;
			}

		});
		if (newUp.length > 0) {
			console.log(newUp[0].id);
			onGetName(newUp[0].name)
			onGetusername(newUp[0].username)
			console.log(newUp[0].email);
			onGetemail(newUp[0].email)
			onGetphone(newUp[0].phone)
			onGetIdForSave(el)
			// console.log(name);
		}
		else {
			return
		}
	}

	const editProductTitle = () => {
		let title
		users.map((product) => {
			if (product.id === getIdForSave) {
				title = product.name
				return
			}
		})
		return title
	}
    useEffect(function () {
		setFetching(true)
		fetch(`https://jsonplaceholder.typicode.com/users/`)
			.then(response => response.json())
			.then(resp => {
				setFetching(false)
				setUsers(resp)
                console.log(users);
                // maxLenghtWord(users)
                // setUsersCount(users.length)
              
			})		
  			.catch(err => {
				setFetching(false)
				setFetchError(err)
			});
	}, [])
	return (
		<div className='common'>
			{
				buttonSaveProductFlag ? <h2 className="edit-product">Edit product - {editProductTitle()} </h2> : <h2>Add new product</h2>
			}
			<div className="add-new-product-panel">
				<Input classNameFlag={redClassFlag} label="name: " placeholder="Enter user`s name" onChangeFunction={onGetName} value={name} />
				<Input classNameFlag={redClassFlag} label="username: " placeholder="Enter user`s username url" onChangeFunction={onGetusername} value={username} />
				<Input classNameFlag={redClassFlag} label="email: " placeholder="Enter user`s email" onChangeFunction={onGetemail} type='text' value={email} />
				<Input label="phone: " placeholder="Enter user`s phone" onChangeFunction={onGetphone} type='nutextmber' value={phone} />

			</div>
			{
				buttonSaveProductFlag ? <div><button className="add-product-item" type="button" onClick={onSaveProduct}>save product</button> <button className="add-product-item" type="button" onClick={returnToAdd}>return to add mode</button></div> : <button className="add-product-item" type="button" onClick={onAddProduct}>add</button>
			}
			<hr />
			<div className='users-list'>
			<QueryLoader fetching={fetching} error={fetchError} />
				{

					users.map((product, index) => {
						const { name, username, email, phone, id } = product;
						return (<UserCard key={index} name={name} username={username} email={email} sale={phone} id={id} onDeleteProduct={onDeleteProduct} onUpdateProduct={onUpdateProduct} />)

					})

				}
			</div>
		</div >
	);
};

export default RegistrationForm;
