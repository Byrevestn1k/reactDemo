import './coctails.css'
import { useEffect, useState, createContext, useContext } from 'react';
import QueryLoader from "../QueryLoader";
import CoctailItem from '../CoctailItem/CoctailItem';
import Pagination from '../Pagination/Pagination';
import { UsersContext } from "../../App";
import { v4 as uuidv4 } from 'uuid';

export const numberOfPageContext = createContext()

const Coctails = () => {
	const [coctails, setCoctails] = useState([])
	const [fetching, setFetching] = useState(false)
	const [numberOfpage, setNumberOfpage] = useState(1)
	const [fetchError, setFetchError] = useState(null);
	let currentNumber = 10;
	let startIndex = numberOfpage * currentNumber - currentNumber
	let endtIndex = numberOfpage * currentNumber - 1
	let number;

	const { setUsersCount, setProductMaxLenghtName } = useContext(UsersContext)

	function maxLenghtWord(products) {
		let maxLenghtWord = 0
		let maxLenghtWordName = ''
		let arrMaxLenghtWordsName = '';
		// let arrMaxLenghtWordsName = [];
		products.map((element) => {
			if (element.strDrink.length > maxLenghtWord) {
				maxLenghtWord = element.strDrink.length
				maxLenghtWordName = element.strDrink
			}
		})
		products.map((element) => {
			if (element.strDrink.length === maxLenghtWordName.length) {
				arrMaxLenghtWordsName += `"${element.strDrink}" `
				// arrMaxLenghtWordsName.push(element.strDrink)
			}
		})
			;
		return arrMaxLenghtWordsName;
	}



	useEffect(function () {
		setFetching(true)
		fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
			.then(response => response.json())
			.then(resp => {
				setFetching(false)
				setCoctails(resp.drinks)
			})
			.catch(err => {
				setFetching(false)
				setFetchError(err)
			});
	}, [])

	setProductMaxLenghtName(maxLenghtWord(coctails));
	setUsersCount(coctails.length);

	function createPagination(current) {
		let currentArray = []
		number = parseInt(coctails.length / current) + (coctails.length / current > parseInt(coctails.length / current) ? 1 : 0)
		for (let i = 0; i < number; i++) {
			currentArray.push(i + 1)
		}
		return currentArray
	}

	function renderPagination() {
		let coctailsToOnepage = []
		coctails.map((el) => {

			if (coctails.indexOf(el) >= startIndex && coctails.indexOf(el) <= endtIndex) {
				coctailsToOnepage.push(el)
			}

		})
		return coctailsToOnepage
	}

	return (
		<>
			<numberOfPageContext.Provider value={{ createPagination, setNumberOfpage, currentNumber, renderPagination }}>

				<QueryLoader fetching={fetching} error={fetchError} />
				<Pagination />
				<div className='coctails-list'>

					{renderPagination().map(({ strDrink, strDrinkThumb, idDrink }) => {

						return (<CoctailItem
							nameOfCoctail={strDrink}
							imageSrc={strDrinkThumb}
							id={idDrink}
							key={uuidv4()}
						/>)

					})}

				</div>

			</numberOfPageContext.Provider>
		</>
	)
}

export default Coctails;
