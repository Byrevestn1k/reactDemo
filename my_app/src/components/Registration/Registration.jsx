import { useState } from 'react';
import './registration.css';
const Registration = () => {
    const emailStroke = 'Еnter your email';
    const userNameStroke = 'Еnter your name';
    const passwordStroke = 'Еnter your password';
    const ageStroke = 'Еnter your full years';
    const [email, setEmail] = useState(emailStroke);
    const [userName, setUserName] = useState(userNameStroke);
    const [password, setPassword] = useState(passwordStroke);
    const [age, setAge] = useState(ageStroke);
    const [result, setResult] = useState(``);
    const InputValueCheck = (element, element2) => {
        if (element.trim().length > 0) {
            return element
        }
        else {
            return element2
        }
    }
    const ButtonRegistrationClick = () => {
        setResult(
            <p>Hello, <span className={userName == userNameStroke ? 'red' : ''}>"{userName}!"</span><br />
                Your email -<span className={email == emailStroke ? 'red' : ''}>"{email}"</span><br />
                Your password -<span className={password == passwordStroke ? 'red' : ''}>"{password}"</span><br />
                Your age -<span className={age == ageStroke ? 'red' : ''}>"{age}"</span>
            </p>
        )
    }
    return (
        <div className="registration">
            <input placeholder={email} type="email" onChange={(event) => setEmail(InputValueCheck(event.target.value, emailStroke))} />
            <input placeholder={userName} type="text" onChange={(event) => setUserName(InputValueCheck(event.target.value, userNameStroke))} />
            <input placeholder={password} type="password" onChange={(event) => setPassword(InputValueCheck(event.target.value, passwordStroke))} />
            <input placeholder={age} type="number" onChange={(event) => setAge(InputValueCheck(event.target.value, ageStroke))} />
            <button onClick={ButtonRegistrationClick} type="button">Registration</button>
            <div >
                {result}
            </div>
        </div>
    )
}
export default Registration;