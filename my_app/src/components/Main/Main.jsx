import { useState } from 'react';

const Main = () => {

    // const [number, setNumber] = useState(0)
    // const onPlusNumberHandler = () => {
    //     setNumber(number + 1)
    // }

    // const onMinusNumberHandler = () => {
    //     setNumber(number - 1)
    // }

    const [firstInput, setFirstInput] = useState();
    const [secondInput, setSecondInput] = useState();
    const [result, setResult] = useState(0);

    const onChangeFirstInputHandler = (value) => {
        setFirstInput(value)
    }

    const onChangeSecondInputHandler = (value) => {
        setSecondInput(value)
    }

    const onPlusHandler = () => {
        setResult(+firstInput + +secondInput)
    }

    const onMinusHandler = () => {
        setResult(+firstInput - +secondInput)
    }
    const onReset = (result) => {
        setResult(result = 0)
    }

    console.log(firstInput)

    return (
        <div>
            <input type="number" onChange={(event) => onChangeFirstInputHandler(event.target.value)} />
            <button onClick={onPlusHandler} type="button">+</button>
            <button onClick={onReset} type="button">reset</button>
            <button onClick={onMinusHandler} type="button">-</button>
            <input type="number" onChange={(event) => onChangeSecondInputHandler(event.target.value)} />
            <div>{result}</div>
        </div>
    )
}

export default Main;