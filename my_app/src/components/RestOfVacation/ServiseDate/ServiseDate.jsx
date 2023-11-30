
import { useEffect, useState, createContext, useContext } from 'react';


import { v4 as uuidv4 } from 'uuid';


const ServiseDate = (props) => {
	const {className, label, id,type, value} = props	
	return (
	<>		
	<div className="servise__input">
		<label htmlFor="">{label}</label>
		<input type={type} id ={id} className={className || '' } value={value}/>
	</div>
	</>

	
	)
}

export default ServiseDate;
