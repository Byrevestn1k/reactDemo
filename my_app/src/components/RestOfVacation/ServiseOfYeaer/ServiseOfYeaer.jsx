import './serviseofyeaer.css'
import { useEffect, useState, createContext, useContext } from 'react';
import SameYear from "../SameYear";

import { v4 as uuidv4 } from 'uuid';


const ServiseOfYeaer = () => {
	let thisYear = new Date().getFullYear()
	let lastYear = new Date(2015,11,31).getFullYear()
	let arrYears=[];
	for (let i = lastYear; i <= thisYear; i++) {
		arrYears.push(i)
		
	}
	return (
	<div className="restoftitle">
		{arrYears.map((el)=>{
			return <SameYear year={el}/>
		})	}
	</div>
	)
}

export default ServiseOfYeaer;
