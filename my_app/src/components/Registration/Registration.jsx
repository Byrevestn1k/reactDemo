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
    



    const ButtonRegistrationClick = () => {
     
      setResult(
   <p>Hello, <span>"{userName}!"</span><br /> 
Your email -<span>"{email}"</span><br />
      Your password -<span>"{password}"</span><br />
      Your age -<span>"{age}"</span>
      </p>

         
      ) 
    }

    return (
        <div className="registration">
            <input placeholder={email} type="email" onChange={(event) => setEmail(event.target.value.trim().length>0?event.target.value:emailStroke)}/>
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