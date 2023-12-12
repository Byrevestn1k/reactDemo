import './sameyear.css';
import { useEffect, useState, createContext, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ServiseDate from '../ServiseDate/ServiseDate';
import {RestVacation} from '../Servise/Servise'

const SameYear = ({year, daysOfServise, daysOfMainServise, servicesFullYears}) => {
	const {startService, getdaysOfServise } = useContext(RestVacation)
	let startDate = startService;
	let lastDate = new Date(year,11,31);
	let additionalLeave =getdaysOfServise
	// console.log(daysOfServise);
	return (
	<div className="sameyear">
		<h2>{year} рік</h2>
		<h4> Основна відпустка:</h4>
		<div className="daysOfMainServise">
		<div>Надається <span className='green'>{daysOfMainServise || 30} </span>- </div>
		<ServiseDate id={`main${year}`} classNameFlag={false} classOfInput={"inputOfVacation"} type={`number`} restOfVacation={daysOfMainServise || 30} />
		</div>
		<h4> Додаткова відпустка:</h4>
		<div className="daysOfMainServise">
		<div>Надається <span className='green'>{additionalLeave(startDate, lastDate )>5?additionalLeave(startDate, lastDate )-5:0}</span> - </div>
		<ServiseDate id={`additionall${year}`} classNameFlag={false} classOfInput={"inputOfVacation"} type={`number`} restOfVacation={additionalLeave(startDate, lastDate )>5?additionalLeave(startDate, lastDate )-5:0} />
		</div>
		

	</div>
	)

}

export default SameYear;
