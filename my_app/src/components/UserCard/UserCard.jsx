import './userCard.css'

const UserCard = ({ nameOfProduct, image, price, sale, id, onDeleteProduct, onUpdateProduct }) => {

	return (
		<div className='common-user-card'>
			<div className="item ">
				<div><img src={image} alt="" /></div>
			</div>
			<div className="item title">
				<div>{` ${nameOfProduct}`}</div>
			</div>

			<div className="item">
				<div className={sale > 0 ? 'line-through' : ''}>{`${price}`}$</div>
			</div>
			<div className="item">
				{sale > 0 ? <div className='itemsale'>{`sale : (${sale}%)`}</div> : ''}
				{sale > 0 ? <div className="itemvalue"><span className='red'>{+price - (+price / 100 * +sale)}$ </span></div> : ''}

			</div>
			{/* <button type='button' onClick={() => { onDeleteProduct(id) }}>delete product</button>
			<button type='button' onClick={() => { onUpdateProduct(id) }}>update product</button> */}
		</div>
	)
};

export default UserCard;
