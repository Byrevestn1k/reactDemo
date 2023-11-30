
import { useEffect, useState, createContext, useContext } from 'react';
import Input from "../../Input";

import { v4 as uuidv4 } from 'uuid';


const Servise = (props) => {
	let years;
	const [startService, setStartService] =useState()
	const [endService, setEndService] = useState()
	const [daysOfServise, setDaysOfServise] = useState()// додаткова відпустка
	const [additionalLeave, setAdditionalLeave] = useState()// всилуга Повних
	
	
	function onGetStart(value){
		setStartService(value)
	}
	function onGetEnd(value){
		setEndService(value)
	}
	
	function getdaysOfServise(){
	
	let startDate = new Date (startService)
	let endDate = new Date (endService)
	
	if(endDate.getFullYear()-startDate.getFullYear()<=5){
		console.log('Вислуга повних років', endDate.getFullYear()-startDate.getFullYear());
		setAdditionalLeave(endDate.getFullYear()-startDate.getFullYear());
	}
	else {
		
		if(endDate.getMonth()>startDate.getMonth()){
			setAdditionalLeave ((new Date (endService).getFullYear())- (new Date (startService).getFullYear()))
		}

		else if(endDate.getMonth()< startDate.getMonth()){
			console.log('Вислуга повних років',((new Date (endService).getFullYear())- (new Date (startService).getFullYear())-1));
			setAdditionalLeave(((new Date (endService).getFullYear())- (new Date (startService).getFullYear())-1))
		}
		else  {
			
			if(endDate.getDate()>=startDate.getDate()){
				console.log('Вислуга повних років',((new Date (endService).getFullYear())- (new Date (startService).getFullYear())));
				setAdditionalLeave((new Date (endService).getFullYear())- (new Date (startService).getFullYear()))
			}
			else{
				console.log('Вислуга повних років',((new Date (endService).getFullYear())- (new Date (startService).getFullYear())-1));
				setAdditionalLeave(((new Date (endService).getFullYear())- (new Date (startService).getFullYear())-1))
			}
		}
			
	}

	setDaysOfServise(additionalLeave>5?additionalLeave-5:0)
			console.log(daysOfServise);

			 
	}
	function addPeriod(){
		
	}

	
	return (
	<>		
	<div className="service__title">
		<h2>Вислуга років</h2>
	</div>
	<div className="service__main">
	<h3>Вислуга років</h3>
	<Input label="Початок служби " type="date"  onChangeFunction={onGetStart} value={startService} />
	 <Input label="Кінець служби " type="date" onChangeFunction={onGetEnd} value={endService} />
	{/* <ServiseDate  label='Початок служби' id='startService' type='date' value={value}/>
	<ServiseDate  label='Кінець служби' id='endService' type='date' value={value}/> */}

	<button onClick={addPeriod}>Додати період</button>
	<button onClick={getdaysOfServise}>розрахувати</button>

	<div>Днів додаткової відпустки: {daysOfServise}</div>
	<div>вислуга років: {additionalLeave}</div>
	{/* <div>вислуга місяців: {daysOfServise / (new Date().getFullYear()%4!==0?365:366)}</div> */}
		
		<div>
			{

			}
			
		</div>
		
		
	</div>
	</>

	
	)
}

export default Servise;
