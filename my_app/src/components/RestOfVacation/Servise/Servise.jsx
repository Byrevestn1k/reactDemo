
import { useEffect, useState,  useContext } from 'react';
import Input from "../../Input";
import { v4 as uuidv4 } from 'uuid';
import { RestVacation } from "../RestOfVacation"
import SameYear from "../SameYear";
const Servise = (props) => {
	const {getAllDaysOfServise}=useContext(RestVacation)
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
			console.log('Вислуга повних років',((new Date (endDate).getFullYear())- (new Date (startDate).getFullYear())));
			setAdditionalLeave ((new Date (endDate).getFullYear())- (new Date (startDate).getFullYear()))
		}

		else if(endDate.getMonth()< startDate.getMonth()){
			console.log('Вислуга повних років',((new Date (endDate).getFullYear())- (new Date (startDate).getFullYear())-1));
			setAdditionalLeave(((new Date (endDate).getFullYear())- (new Date (startDate).getFullYear())-1))
		}
		else  {
			
			if(endDate.getDate()>=startDate.getDate()){
				console.log('Вислуга повних років',((new Date (endDate).getFullYear())- (new Date (startDate).getFullYear())));
				setAdditionalLeave((new Date (endDate).getFullYear())- (new Date (startDate).getFullYear()))
			}
			else{
				console.log('Вислуга повних років',((new Date (endDate).getFullYear())- (new Date (startDate).getFullYear())-1));
				setAdditionalLeave(((new Date (endDate).getFullYear())- (new Date (startDate).getFullYear())-1))
			}
		}
			
	}
	
			// console.log(`вислуга  повних років  `+additionalLeave);
			setDaysOfServise(additionalLeave>5?additionalLeave-5:0)
			// getAllDaysOfServise(daysOfServise)
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
			<button onClick={getdaysOfServise}>розрахувати</button>
			<div>Днів додаткової відпустки станом на останню вказану дату: {daysOfServise}</div>
			<div>вислуга років: {additionalLeave}</div>
			</div>
		</div>
		<div>
				<div className="restoftitle">
				{arrYears.map((el)=>{
					return <SameYear year={el} daysOfServise={daysOfServise} />
				})	}
		</div>
		</div>
	</div>

	
	)
}

export default Servise;
