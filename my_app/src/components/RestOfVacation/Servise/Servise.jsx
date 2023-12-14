
import { useEffect, useState, createContext } from 'react';
import Input from "../../Input";
import { v4 as uuidv4 } from 'uuid';
import SameYear from "../SameYear";


export const RestVacation = createContext()
const Servise = () => {
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

	function getdaysOfServise(startService, endService){

		let startDate = new Date (startService)
		let endDate = new Date (endService)
		let additionalLeave;
		if(endDate.getFullYear()-startDate.getFullYear()<=5){
			// console.log('Вислуга повних років', endDate.getFullYear()-startDate.getFullYear());
			setAdditionalLeave(endDate.getFullYear()-startDate.getFullYear());
		}
		else {
			
			if(endDate.getMonth()>startDate.getMonth()){
				// console.log('Вислуга повних років',((new Date (endDate).getFullYear())- (new Date (startDate).getFullYear())));
				additionalLeave = ((new Date (endDate).getFullYear())- (new Date (startDate).getFullYear()))
			}

			else if(endDate.getMonth()< startDate.getMonth()){
				// console.log('Вислуга повних років',((new Date (endDate).getFullYear())- (new Date (startDate).getFullYear())-1));
				additionalLeave =(((new Date (endDate).getFullYear())- (new Date (startDate).getFullYear())-1))
			}
			else  {
				
				if(endDate.getDate()>=startDate.getDate()){
					// console.log('Вислуга повних років',((new Date (endDate).getFullYear())- (new Date (startDate).getFullYear())));
					additionalLeave =((new Date (endDate).getFullYear())- (new Date (startDate).getFullYear()))
				}
				else{
					// console.log('Вислуга повних років',((new Date (endDate).getFullYear())- (new Date (startDate).getFullYear())-1));
					additionalLeave =(((new Date (endDate).getFullYear())- (new Date (startDate).getFullYear())-1))
				}
			}
				
		}
		return additionalLeave;
		
					// getAllDaysOfServise(daysOfServise)
	}
	function getdaysOfServiseHandler(){
		let days= getdaysOfServise(startService, endService)
		setAdditionalLeave(days)
		setDaysOfServise(days>5?days-5:0)
		
	
		
	}

		
	function addPeriod(){
		
	}
	let thisYear = new Date().getFullYear()
	let lastYear = new Date(2015,11,31).getFullYear()
	let arrYears=[];
	for (let i = lastYear; i <= thisYear; i++) {
		arrYears.push(i)
		
	}
	
	return (
	<div className='service'>		
		<div>
			<div className="service__title">
				<h2>Вислуга років</h2>
			</div>
			<div className="service__main">
			<Input label="Початок служби " type="date"  onChangeFunction={onGetStart} value={startService} />
			<Input label="Кінець служби " type="date" onChangeFunction={onGetEnd} value={endService} />
			<button onClick={addPeriod}>Додати період</button>
			<button onClick={getdaysOfServiseHandler}>розрахувати</button>
			<div>Днів додаткової відпустки станом на останню вказану дату: {daysOfServise}</div>
			<div>вислуга років: {additionalLeave}</div>
			</div>
		</div>

		<div>
		<div className="restoftitle">
		<RestVacation.Provider value={{getdaysOfServise, startService}}>
				{arrYears.map((el)=>{
					return <SameYear year={el} daysOfServise={daysOfServise} />
				})	}
		</RestVacation.Provider>
		</div>
		</div>
	</div>

	
	)
}

export default Servise;
