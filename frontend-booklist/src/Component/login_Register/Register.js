import React, { useState } from 'react'
import NavBar from '../Home/NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Register() {
    const [name, setName] = useState();
    const [pass, setPass] = useState();
    const [confirm, setConfirm] = useState();
    const navigate = useNavigate()
    const submitHandle = async (event) => {
        console.log(name, pass, confirm)
        const formData = new FormData();
        formData.append("username", name)
        formData.append("password", pass)
        if (pass === confirm) {
            console.log("password is confirmed")
            await axios.post("http://localhost:8080/register", formData)
                .then((res) => {
                    console.log(res)
                    window.alert("Register successfully")
                    navigate("/login")
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        else {
            window.alert("Password Not match")
        }

        event.preventDefault();
        setName("")
        setPass("")
        setConfirm("")
    }
    return (<>
        <NavBar />
        <div className='container-login'>
            <h1>Member Register</h1>
            <form onSubmit={submitHandle}>
                <input required type="text" placeholder='username' name='username' value={name} onChange={(e) => { setName(e.target.value) }} /><br />
                <input required type="password" placeholder='password' name='password' value={pass} onChange={(e) => { setPass(e.target.value) }} /><br />
                <input required type="password" placeholder='Confirm password' name='Confirm password' value={confirm} onChange={(e) => { setConfirm(e.target.value) }} /><br />
                <button required className='button-login' type="submit">REGISTER</button>
                <div className='kkd' onClick={() => navigate("/login")}>Member Login</div>
            </form>
        </div>
    </>)
}

export default Register;
