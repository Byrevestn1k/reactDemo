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

         <Link to={HOME_PATH}>Home</Link>
         <Link to={PRODUCTS_PATH}>Products</Link>
         <Link to={REGISTRATION_PATH}>Registration</Link>
         <Link to={REF_PATH}>Ref</Link>

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