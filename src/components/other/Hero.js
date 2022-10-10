import React from 'react'

const Hero = ({name}) => {
 if (name === 'joker'){
    throw new Error("Invalid")
 }
 return <div>
    {name}
 </div>
}

export default Hero