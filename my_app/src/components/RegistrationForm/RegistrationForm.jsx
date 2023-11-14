import { useState } from "react";
import Input from "../Input";
import UserCard from "../UserCard";

const RegistrationForm = () => {

    const [users, setUser] = useState([])

    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()

    function onAddUser() {
        const user = {
            name: name,
            surname: surname,
            email: email
        };
        // users.push(user)
        setUser([...users, user])
    }
    function onGetName(value) {
        setName(value)
    };
    function onGetSurname(value) {
        setSurname(value);
    };
    function onGetEmail(value) {
        setEmail(value);
    };

    return (
        <div className="common">
            <Input
                type="text"
                placeholder={name}
                value=""
                valueCheck=""
                labelInfo="Name: "
                onChange={onGetName}
            />
            <Input
                type="text"
                placeholder={surname}
                value=""
                valueCheck=""
                labelInfo="Surname: "
                onChange={onGetSurname}
            />
            <Input
                type="text"
                placeholder={email}
                value=""
                valueCheck=""
                labelInfo="Email: "
                onChange={onGetEmail}
            />
            <button type="buttom" onClick={onAddUser}>Add User</button>

            <div>
                {
                    users.map((user) => {
                        const { name, surname, email, index } = user;
                        return (<UserCard name={name} surname={surname} email={email} key={index} />)
                    })}
            </div>




        </div>
    )
}
export default RegistrationForm;