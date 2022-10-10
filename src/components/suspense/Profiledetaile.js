import React from 'react'
import { fetchdata } from '../other/Api';


const resources = fetchdata();


const Profiledetaile = () => {
    const user = resources.user.read();
    console.log(user);
    return (
      <div>
        <ul>
          <li>Name : {user.name}</li>
          <li>Email : {user.email}</li>
          <li>Address : {user.address}</li>
        </ul>
      </div>
    );
  };

export default Profiledetaile