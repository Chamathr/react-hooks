import React, { useEffect, useState } from "react";

const CheckUseEffect = () => {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    useEffect(() => {
        document.title = `count - ${counterOne}`
    }, [counterOne])


    return (
        <>
            <div>
                <button onClick={() => setCounterOne(prevCounter => prevCounter + 1)}>Counter One</button>
                <span>{counterOne}</span>
            </div>
            <div>
                <button onClick={() => setCounterTwo(prevCounter => prevCounter + 1)}>Counter Two</button>
            </div>
        </>
    )
}

export default CheckUseEffect;