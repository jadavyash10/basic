import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Searchparams = () => {
    const [searchparams,setSearchparams] = useSearchParams();

    const age = searchparams.get('age');
    const city = searchparams.get('city');
  return (
    <div>Age is : {age} city is :{city}</div>
  )
}

export default Searchparams