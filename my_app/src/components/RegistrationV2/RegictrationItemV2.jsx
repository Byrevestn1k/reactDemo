import Input from '../Input/Input';
import { useState } from 'react';
import './registration.css';

const RegictrationItemV2 = () => {
    const inputElements = [
        {
            name: `name`,
            id: 1,
            type: 'text',
            placeholder: 'Enter your name',
            value: "",
            valueCheck: true,
        },
        {
            name: `email`,
            id: 2,
            type: 'email',
            placeholder: 'Enter your email',
            value: "",
            valueCheck: true,
        },
        {
            name: `password`,
            id: 3,
            type: 'password',
            placeholder: 'Enter your password',
            value: "",
            valueCheck: true,
        },
        {
            name: `age`,
            id: 4,
            type: 'number',
            placeholder: 'Enter your full ages',
            value: "",
            valueCheck: true,
        },

    ];
    const [result, setResult] = useState(``);
    const ButtonRegistrationClick = () => {

        setResult(
            // <p>Hello, <span>"{userName}!"</span><br />
            //     Your email -<span>"{email}"</span><br />
            //     Your password -<span>"{password}"</span><br />
            //     Your age -<span>"{age}"</span>
            // </p>


        )
    }
    return (

        <div className=''>
            {
                inputElements.map((element) => {
                    return (
                        <div className="registration">
                            <Input
                                type={element.type}
                                placeholder={element.placeholder}
                                value={element.value} />

                        </div>
                    )
                })
            }
            <button>Registration</button>
            <div >
                {result}
            </div>
        </div>
    );
}

export default RegictrationItemV2;
