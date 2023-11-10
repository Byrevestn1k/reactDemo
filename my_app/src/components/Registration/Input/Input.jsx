import { useState } from 'react';
import './registration.css';

const Registration = () => {
const emailStroke = 'Еnter your email';
const userNameStroke = 'Еnter your name';
const passwordStroke = 'Еnter your password';
const ageStroke = 'Еnter your full year';

    const [email, setEmail] = useState(emailStroke);
    const [userName,  setUserName] = useState(userNameStroke);
    const [password, setPassword] = useState(passwordStroke);
    const [age, setAge] = useState(ageStroke);
    const [result, setResult] = useState(``);
      const spanClassName = '' 

    const ButtonRegistrationClick = () => {
      let successfulRegistration = userName.trim().length>1 && email.trim().length>1 && password.trim().length>1 && age.trim().length>0?'successful':'NOT successful';
console.log(userName);
      
      setResult(
<p>Hello, <span className={spanClassName}>"{userName}"</span>, your registration is !
      Your email - <span className={spanClassName}>"{email}"</span>
      Your password - <span className={spanClassName}>"{password}"</span>
      Your age - <span className={spanClassName}>"{age}"</span>
      </p>

         
      ) 
    }

    return (
        <div className="registration">
            <input placeholder={email} type="email" onChange={ function (event) {
                setEmail(event.target.value.trim().length>0?event.target.value:emailStroke); 
                return event.target.value.trim().length>0?'red': ''
                }}
                />
            <input placeholder={userName} type="text" onChange={(event) => setUserName(event.target.value.trim().length>0?event.target.value:userNameStroke)} />
            <input placeholder={password} type="password" onChange={(event) => setPassword(event.target.value.trim().length>0?event.target.value:passwordStroke)} />
            <input placeholder={age} type="number" onChange={(event) => setAge(event.target.value.trim().length>0?event.target.value:ageStroke)} />
           
            <button onClick={ButtonRegistrationClick} type="button">Registration</button>
            
            <div >
               {result}
            </div>
        </div>
    )
}

export default Registration;