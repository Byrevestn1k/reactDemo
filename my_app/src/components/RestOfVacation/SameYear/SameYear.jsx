import './sameyear.css';
import { useEffect, useState, createContext, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';


const SameYear = ({year, daysOfServise, daysOfMainServise, servicesFullYears}) => {
	let thisYear = new Date().getFullYear()
	let lastYear = new Date(2015,11,31).getFullYear()
	return (
	<div className="sameyear">
		<h3>{year} рік</h3>
		<p>Вислуга повних років: {servicesFullYears || `розробляється...`}</p>
		<p>залишок основної відпустки: {daysOfMainServise || `30`}</p>
		<p>залишок додаткової відпустки: {daysOfServise}</p>

	</div>
	)
}

export default SameYear;
