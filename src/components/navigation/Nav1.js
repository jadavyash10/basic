import React from 'react'
import { Link,useNavigate} from 'react-router-dom';

const Nav1 = () => {
  const navigation = useNavigate();
    const handleLogin = () => {
      localStorage.setItem("auth", JSON.stringify({ isAuth: true }));
    };
    const handleLogout = () => {
      localStorage.clear();
      navigation("/")
    };
   
  
    return (
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/public">
          Public Route
        </Link>
        <Link to="/private">
          Private Route
        </Link>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    );
  };

export default Nav1