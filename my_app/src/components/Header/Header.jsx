import NavigationItem from '../NavigationItem/NavigationItem';
import './header.css';
import { useContext } from "react";
import { UsersContext } from "../../App";
import { Link } from "react-router-dom";
import { HOME_PATH, PRODUCTS_PATH, REGISTRATION_PATH, REF_PATH } from "../../constants/constants";


const Header = (props) => {
   const { } = props

   const { usersCount, productMaxLenghtName } = useContext(UsersContext)

   const navElements = [
      {
         text: 'First',
         isUppercasetext: true,
         description: "second description",
      },
      {
         text: 'Second',
         isUppercasetext: true,
         description: "second description",
      },
      {
         text: 'Third',
         isUppercasetext: true,
         description: "second description",
      },
      {
         text: 'quarter',
         isUppercasetext: true,
      },
      {
         text: `Coctails count: `,
         isUppercasetext: true,
         usersCount: usersCount,
      },
      {
         text: `longest name: `,
         isUppercasetext: true,
         usersCount: productMaxLenghtName,
      },
   ];


   return (
      <header>
<div className='header'>
<div className='common'>

               <Link to={HOME_PATH}>vacation</Link>
               </div>
               <div className='common'>
               <Link to={REF_PATH}>Coctails</Link>
               </div>
               
               <div className='common'>
               <Link to={PRODUCTS_PATH}>Products</Link>
               </div>
               <div className='common'>
               <Link to={REGISTRATION_PATH}>Registration</Link>
               </div>
               
         </div>
         {/* <div className='header'>
            {
               navElements.map((element) => {
                  return (
    
                     // <NavigationItem
                     //    key={element.text}
                     //    text={element.text}
                     //    isUppercasetext={element.isUppercasetext}
                     //    description={element.usersCount} />
                  )
               })
            }
         </div> */}
         {/* <NavigationItem text='header' isUppercasetext={false} /> */}
      </header>);
}

export default Header;