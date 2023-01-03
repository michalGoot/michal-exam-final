import React from "react";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Result from "./Result";

export default function Main(){
    const [num1, setNum1] = useState(null);
    const [num2, setNum2] = useState(null);
    const [result, setResult] = useState(null)
    const getNum1 = (data) => {
        console.log(Number(data));
        setNum1(data)
    }
    const getNum2 = (data) => {
        console.log(Number(data));
        setNum2(data)
    }
    const calculate = () => {
        console.log(Number(num1) + Number(num2));
        setResult(Number(num1) + Number(num2))
    }
    return(
        <div className="calc-wrapper">
            <h1 className="title-calculator">calculator</h1>
            <div className="input-wrapper">
            <Input sendNum={getNum1}/> <Button calculate={calculate}/>
            <Input sendNum={getNum2}/> = 
            <Result result={result}/>
            </div>
        </div>
    )
}