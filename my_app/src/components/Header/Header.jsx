
import NavigationItem from '../NavigationItem/NavigationItem';
import './header.css';


const Header = () => {

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
   ];



   return (
      <header>
         <div className='header'>
            {
               navElements.map((element) => {
                  return (
                     <NavigationItem

                        text={element.text}
                        isUppercasetext={element.isUppercasetext}
                        description={element.description} />
                  )
               })
            }
         </div>
         <NavigationItem text='header' isUppercasetext={false} />
      </header>);
}

export default Header;