import React from 'react'
import { Link } from 'react-router-dom';
import "../../styles/navbar.css"
import { Uncontroll } from '../other/Uncontroll';

const Navbar = () => {
  return (
    <ul>

        <li><Link to='/'>Home</Link></li>
        {/* <li><Link to='/nav'>Nav</Link></li> */}
        <li><Link to='/nav1'>Nav</Link></li>
        <li><Link to='/search'>Search</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/suspense'>Suspense</Link></li>
        <li><Link to='/lazy'>LazyDemo</Link></li>
        <li><Link to='/error'>ErrorBoundary</Link></li>
        <li><Link to='/fetch'>FetchApi</Link></li>
        <li><Link to='/axios'>AxiosApi</Link></li>
        <li><Link to='/javascript'>Javascript</Link></li>
        <li><Link to='/form'>Form</Link></li>
        {/* <li><Link to='/login'>Login</Link></li> */}
        <li><Link to='/dform'>Login</Link></li>
        <li><Link to='/form2'>Form2</Link></li>
        <li><Link to='/storageapi'>StorageApi</Link></li>
        <li><Link to='/redux'>Redux</Link></li>
        <li><Link to='/reusable'>Reusable</Link></li>
        <li><Link to='/uncontroll'>Uncontroll</Link></li>
        <li><Link to='/query'>Query</Link></li>
        <li><Link to='/formik'>Formik</Link></li>
    </ul>
  )
}

export default Navbar