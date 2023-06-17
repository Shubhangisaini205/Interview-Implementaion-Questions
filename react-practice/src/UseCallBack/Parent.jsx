import React, { useCallback, useState } from 'react'
import Child from './Child'

function Parent() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const IncrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    // this fun function is calling wheneve counterone changing , we are passing it as a prop in child becuase if this child is also rendering when we are increasing our counter One. to otpimize this we use useCallback here

    // const fun = ()=>{
    //   console.log("hello")
    // }

    // using usecallback
    const fun = useCallback(() => {
        console.log("hello")
    }, [counterTwo])
    //   fun will call when counterTwo change
    return (
        <>

            <Child counterTwo={counterTwo} fun={fun} />
            <button onClick={IncrementOne}>CounterOne - {counterOne}</button>
        </>
    )
}

export default Parent