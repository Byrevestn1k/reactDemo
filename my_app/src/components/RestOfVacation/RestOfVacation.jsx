import './restofvacation.css'
import { useEffect, useState, createContext, useContext } from 'react';
import Servise from './Servise';
import { v4 as uuidv4 } from 'uuid';


const RestOfVacation = () => {
	
	return (
	<div className="restoftitle">
		<div className="title"><h1>Залишок відпусток</h1></div>
		<div className="restoftitle__main">
			<div className="service">
				<Servise/>

			</div>
		</div>
	</div>
	)
}

export default RestOfVacation;
