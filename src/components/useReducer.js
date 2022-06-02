import React, { useReducer } from 'react'

const CheckUseReducer = () => {

    const initialState = 0

    const reducer = (state , action) => {
        switch(action){
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1
            case 'reset':
                return 0
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState)

    return(
        <>
        <div>useReducer</div>
        <div>Count - {count}</div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>

        </>
    )
}

export default CheckUseReducer;