import React, { useMemo, useState } from 'react'

const CheckUseMemo = () => {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const handleCounterOne = () => {
        setCounterOne(counterOne + 1)
    }

    const handleCounterTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const delayFunction = () => {
        let i = 0
        while (i < 2000000000) {
            i++
        }
    }

    const isEven = useMemo(() => {
        delayFunction()
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <>
            <div>useMemo</div>
            <div>
                <button onClick={handleCounterOne}>Counter One - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={handleCounterTwo}>Counter Two - {counterTwo}</button>
            </div>
        </>
    )
}

export default CheckUseMemo