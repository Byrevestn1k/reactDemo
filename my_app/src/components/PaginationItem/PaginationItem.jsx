import './paginationItem.css'

const PaginationItem = ({ number, onclick, activeItem, activeItemFlag }) => {

	return (
		<div className='pagination-item' onClick={onclick} >{number} </div>
	)
};

export default PaginationItem;
