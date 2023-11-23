import NavigationItem from '../NavigationItem/NavigationItem';
import './header.css';
import { useContext } from "react";
import { UsersContext } from "../../App";
const Header = (props) => {
   const { } = props

   const { usersCount } = useContext(UsersContext)
   const { productMaxLenghtName } = useContext(UsersContext)
   // let stringmaxName = ``;

   // productMaxLenghtName.forEach(element => {
   //    stringmaxName += element + ` `
   // });
   console.log(productMaxLenghtName);
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
         text: 'samsung',
         isUppercasetext: true,
      },
      {
         text: `products count: `,
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
            {
               navElements.map((element) => {
                  return (
                     <NavigationItem
                        key={element.text}
                        text={element.text}
                        isUppercasetext={element.isUppercasetext}
                        description={element.usersCount} />
                  )
               })
            }
         </div>
         <NavigationItem text='header' isUppercasetext={false} />
      </header>);
}

export default Header;