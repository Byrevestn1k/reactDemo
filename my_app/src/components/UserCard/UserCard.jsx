import { useState } from "react";
import Input from "../Input";

import './usercard.css'


const UserCard = (name, surname, email) => {
    return (
        <div className="usercard">
            <div>
                `name - ${name}`
            </div>
            <div>
                `surname - ${surname}`
            </div>
            <div>
                `email - ${email}`
            </div>

        </div>
    )


}
export default UserCard;