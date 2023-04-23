import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./home.css"
function NavBar() {
    const navigate = useNavigate();
    return (<>
        <div className='container'>
            <div id="main" onClick={() => navigate('/')}>Book List App</div>
            <div id="login" onClick={() => navigate('/login')}>Login</div>
            <div id="register" onClick={() => navigate('/register')}>Register</div>
        </div>
    </>)
}

export default NavBar;