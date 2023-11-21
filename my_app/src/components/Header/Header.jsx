import NavigationItem from '../NavigationItem/NavigationItem';
import './header.css';
import { useState, useContext } from "react";
import { UsersContext } from "../../App";
const Header = (props) => {
   const { } = props

   const { usersCount } = useContext(UsersContext)

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
         text: `user count: `,
         isUppercasetext: true,
         usersCount: usersCount,
      },];


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