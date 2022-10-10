import React from 'react'
import { useState } from 'react';

const Detail = () => {
    const [first, setfirst] = useState("Tagline")
  return (
    <div>comp name is {first}</div>
  )
}

export default Detail