import PaginationItem from '../PaginationItem';
import './pagination.css'
import { useState, useContext } from 'react';
import { numberOfPageContext } from "../Coctails/Coctails"


const Pagination = ({ }) => {
	let arrayOfPAginationItem = document.querySelectorAll(`.pagination-item`)
	let { createPagination } = useContext(numberOfPageContext)
	let { setNumberOfpage } = useContext(numberOfPageContext)
	let { currentNumber } = useContext(numberOfPageContext)
	let { renderPagination } = useContext(numberOfPageContext)

	function onclickPaginationItem(event) {
		setNumberOfpage(+event.target.innerText);
		renderPagination()
		removeActivePagination()
		event.target.classList.add('active')

	}

	function removeActivePagination() {
		if (!arrayOfPAginationItem == 0) {
			for (let index = 0; index < arrayOfPAginationItem.length; index++) {
				arrayOfPAginationItem[index].classList.remove(`active`);
			}

		}
	}

	function onClickStart() {
		setNumberOfpage(1)
		removeActivePagination()
		arrayOfPAginationItem[1].classList.add('active')
	}
	function onClickEnd() {
		setNumberOfpage(10)
		removeActivePagination()
		arrayOfPAginationItem[arrayOfPAginationItem.length - 2].classList.add('active')
	}


	return (
		<div className='pagination'>
			<div className='pagination-item' onClick={onClickStart}>&#60;&#60;  </div>
			{
				createPagination(currentNumber).map((element) => {
					return (<PaginationItem number={element} onclick={onclickPaginationItem} />)

				})
			}
			<div className='pagination-item' onClick={onClickEnd}>&#62;&#62;  </div>
		</div>



	)
}

export default Pagination;
