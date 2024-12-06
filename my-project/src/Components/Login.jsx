import React from "react";
import './login.css';
import { useNavigate } from "react-router";
import { useState } from "react";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(false)
    const navigate = useNavigate();

    const validateEmail = (value) => {
        const valEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!valEmail) {
            setError('Email non valida')
        } else {
            setIsValid(valEmail.test(value));
        }
    };

    const newEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
    };

    const validatePassword = (value) => {
        const valPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!valPass) {
            setError('Password non valida')
        } else {
            setIsValid(valPass.test(value));
        }
    };

    const newPassword = (e) => {
        const value = e.target.value;
        setPassword(value);
        validatePassword(value);
    };

    const handleLogin = () => {
        if (validateEmail && validatePassword) {
            navigate('/agenda')
        } else {
            setError('Email o Password non validi')
        }
    }

    return (
        <>
            <div className="wrapper">
                <div className="topWrp">
                    <p className="login">Login</p>
                </div>
                <div className="midWrp">
                    <div className="emailWrp">
                        <p className="emailSign">*</p><p className="email">Email</p>
                        <label htmlFor="email" className="emailInputWrp">
                            <input type="email" className="emailInput" name="email" placeholder="Inserisci l'indirizzo mail" value={email} onChange={newEmail} />
                        </label>
                    </div>

                    <div className="pwdWrp">
                        <p className="pwdSign">*</p><p className="pwd">Password</p>
                        <label htmlFor="password" className="pwdInputWrp">
                            <input type="password" className="pwdInput" name="password" placeholder="Inserisci la password" value={password} onChange={newPassword} />
                            <img src="" alt="" />
                        </label>
                    </div>
                </div>
                <div className="bottomWrp">
                    <button type="button" className="btn" onClick={handleLogin}>Accedi</button>
                </div>
            </div >
        </>
    )
}

export default Login