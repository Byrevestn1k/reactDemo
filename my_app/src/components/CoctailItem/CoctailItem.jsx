import './coctailItem.css'

const CoctailItem = ({ nameOfCoctail, imageSrc, id }) => {

	return (
		<div className='common-coctail-card'>
			<div className="item ">
				<div><img src={imageSrc} alt="" /></div>
			</div>
			<div className="item title">
				<div>{` ${nameOfCoctail}`}</div>
			</div>

			{/* <button className='cart-button' type='button' onClick={() => { onDeleteProduct(id) }}>delete product</button>
			<button className='cart-button' type='button' onClick={() => { onUpdateProduct(id) }}>update product</button> */}
		</div>
	)
};

export default CoctailItem;
