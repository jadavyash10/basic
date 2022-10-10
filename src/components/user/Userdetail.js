import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Userdetail = () => {
  
  let { id } = useParams();
  console.log('id', id)
    return (
      <>
        <h1>Now showing user with slug: {id}</h1>
      </>
    );
}

export default Userdetail