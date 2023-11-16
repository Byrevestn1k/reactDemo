import './userCard.css'

const UserCard = ({ nameOfProduct, category, price, sale, id, onDeleteProduct, onUpdateProduct }) => {

	return (
		<div className='common-user-card'>
			<div className="item">
				<div>{`Product's name : ${nameOfProduct}`}</div>
			</div>
			<div className="item">
				<div>{`category : ${category}`}</div>
			</div>
			<div className="item">
				<div>{`price : ${price}`}$</div>
			</div>
			<div className="item">
				<div className='itemname'>{`sale :`}</div>
				<div className="itemvalue">{+price - (+price / 100 * +sale)}$ ({sale}%)`</div>

			</div>
			<button type='button' onClick={() => { onDeleteProduct(id) }}>delete product</button>
			<button type='button' onClick={() => { onUpdateProduct(id) }}>update product</button>
		</div>
	)
};

export default UserCard;
