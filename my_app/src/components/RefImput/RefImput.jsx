
import './products.css';
import { useEffect, useRef, useState } from 'react';
import UserCard from "../UserCard";
import QueryLoader from "../QueryLoader";



const RefImput = () => {
    let inputRef = useRef(null)
    let textRef = useRef(`null`)

    console.log(textRef.current);

    // useEffect(() => {
    //     console.log(inputRef.current);

    // }, [])

    return (
        <label htmlFor="">
            <input ref={inputRef} id='InputRef' />
        </label >
    )
}




export default RefImput;
