import React, { useState } from "react";

const CheckAsyncConcept = () => {

    const [count, setCount] = useState(0)

    const delayFunction = () => {
        let i = 0
        while (i < 2000000000) {
            i++
        }
        return i
    }

    const getData = async () => {
        try {
            return Promise.resolve(fetch('https://jsonplaceholder.typicode.com/todos/1'))
        }
        catch (error) {
            return Promise.reject(error)
        }
    }

    const getCalculation = async (val1, val2) => {
        return new Promise((resolve, reject) => {
            try {
                if(val1/val2 === 5){
                    resolve(val1)
                }
                else{
                    reject(val2)
                }
            }
            catch (error) {
                reject(error)
            }
        })
    }

    const showValue = (value) => {
        console.log(value)
    }

    const getValue = async (callback) => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const value = data.status
        callback(value)
    }


    const handleClick = async () => {
        // setTimeout(()=>{console.log('1')}, 3000)
        // const data = await getData()

        // try{
        //     const value = await getCalculation(10,5)
        //     console.log(value)
        // }
        // catch(error){
        //     console.log('asa',error)
        // }

        // delayFunction()
        getValue(showValue)
        setCount(prevCount => prevCount + 1)
    }

    return (
        <>
            <button onClick={handleClick}>Click</button>
            <span>{count}</span>
        </>
    )
}

export default CheckAsyncConcept;