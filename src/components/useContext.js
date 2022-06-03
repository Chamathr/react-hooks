import React, {useContext} from "react";
import {UserContext} from '../App'

const CheckUseContext = () => {

    const userValue = useContext(UserContext)

    return(
        <>
            <span>My name is {userValue}</span>
        </>
    )
}

export default CheckUseContext;