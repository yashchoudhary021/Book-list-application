import React from 'react'
import NavBar from '../Home/NavBar';
import "./login.css"
import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate()
    const [name, setName] = useState();
    const [pass, setPass] = useState();
    const submitHandle = async (e) => {
        console.log("hello login")
        console.log(name, pass)
        const formData = new FormData();
        formData.append("username", name)
        formData.append("password", pass)
        await axios.post("http://localhost:8080/login", formData)
            .then((res) => { 
                console.log(res)
                localStorage.setItem("loginToken", res.data.token)
                window.alert("login successfully")
                navigate("/")
            })
            .catch((err) => {
                console.log(err)
                window.alert("Invalid credantial")
            })
        e.preventDefault();
        setName("")
        setPass("")
    }
    return (<>
        <NavBar />
        <div className='container-login'>
            <h1>Member Login</h1>
            <form action="" onSubmit={submitHandle}>
                <input required type="text" placeholder='username' name='username' value={name} onChange={(e) => { setName(e.target.value) }} /><br />
                <input required type="password" placeholder='password' name='password' value={pass} onChange={(e) => { setPass(e.target.value) }} /><br />
                <button className='button-login' type="submit">LOGIN</button>
                <div className='kkd'>Forgot password</div>
            </form>
        </div>
    </>)
}

export default Login;
