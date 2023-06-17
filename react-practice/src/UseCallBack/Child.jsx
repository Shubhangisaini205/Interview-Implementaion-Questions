import React, { memo } from 'react'

function Child({counterTwo,fun}) {
    console.log("Child componenet renderd")
    // if we are not using memo in exporting it will render when parent change, memo restrict it as this child will only render when any thing chnage in props of child
  return (
    <div>Child</div>
  )
}

export default memo(Child)