import React from 'react'
import { fetchdata } from '../other/Api';

const resources = fetchdata();



const Profilepost = () => {
    const post = resources.post.read();
    return (
      <div>
        <ul>
          {post.map((v, i) => (
            <li key={v.id}>{v.title}</li>
          ))}
        </ul>
      </div>
    );
  };

export default Profilepost