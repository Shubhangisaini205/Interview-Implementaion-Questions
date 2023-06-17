import React, { useMemo, useState } from 'react'

function Memo() {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)
  const IncrementOne = () => {
    setCounterOne(counterOne + 1)
  }
  const IncrementTwo = () => {
    setCounterTwo(counterTwo + 1)
  }

  // when we click of second button this function will also run and make our app slow, to oopyimise this we use UseMemo hook
  /*
  const IsEven = () => {
    //heavy logic for just checking the delay
    console.log("OK")
    let i = 0;
    while(i<2000000000){
      i++;
    }
    return counterOne % 2 == 0
  }
  */

  //by useMemo
  let IsEven= useMemo(() => {
    //heavy logic for just checking the delay
    console.log("OK")
    let i = 0;
    while(i<2000000000){
      i++;
    }
    return counterOne % 2 == 0
  },[counterOne])
  //  dependency make sure that when the counterOne change this function will run only;

  //conclusion: By using UseMemo our secondCounter performace  will not get affected.

  return (
    <>
      <button onClick={IncrementOne}>CounterOne - {counterOne}</button>
      {/* <span>{IsEven() ? "Even" : "Odd"}</span> */}
      <span>{IsEven ? "Even" : "Odd"}</span>
      <button onClick={IncrementTwo}>CounterTwo - {counterTwo}</button>

    </>

  )
}

export default Memo