
import { useEffect, useState, createContext, useContext } from 'react';


import { v4 as uuidv4 } from 'uuid';


const ServiseDate = (props) => {

let [inputVaction, setSnputVaction] = useState()
	const { id,value, type, placeholder, label, classNameFlag,  classOfInput, restOfVacation } = props;
	let [summ, setSumm] = useState(restOfVacation);
	let SummRestOfVacation =summ;
	console.log( SummRestOfVacation);
	function onChangeFunction(params) {
	setSnputVaction (params);
}
	function onGetSumm(){
		setSumm(SummRestOfVacation-inputVaction);
		let number = document.querySelector(`#${id}`)
		let div = document.createElement(`div`)
		div.textContent = ` ${inputVaction} -`;
		number.insertAdjacentElement(`beforebegin`, div)
	}
	return (
		<div className="servise__input">
			
			<input
			id={`${id}`}
				disabled={``}
				type={type || "text"}
				placeholder={placeholder}
				// onChange={(event) => onChangeFunction(event.target.value)}
				onChange={(event) => onChangeFunction(event.target.value)}
				className={classNameFlag ? value ? '' : 'error' : classOfInput}
			/>
	<button  onClick={onGetSumm}>=</button>
	<div>Залишок <span className='red'>{summ}</span></div>
		</div>
	)


}

export default ServiseDate;
