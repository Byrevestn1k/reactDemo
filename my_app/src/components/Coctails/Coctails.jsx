import './coctails.css'

import { useEffect, useState, createContext } from 'react';
import UserCard from "../UserCard";
import QueryLoader from "../QueryLoader";
import CoctailItem from '../CoctailItem/CoctailItem';
import Pagination from '../Pagination/Pagination';
import { indexOf } from 'lodash';


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
							id={idDrink} />)

					})}

				</div>

			</numberOfPageContext.Provider>
		</>
	)
}

export default Coctails;
