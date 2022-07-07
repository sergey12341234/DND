import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { actionRegister, actionLogin } from '../../store/authSlice';
import { useDispatch } from 'react-redux/es/exports';

const AuthOrRegister = () => {
    const dispatch = useDispatch();
    const [activeBtn, setActiveBtn] = useState('login');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [regPass, setRegPass] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [confirmRegPass, setConfirmRegPAss] = useState('');
    const handleSetButtonActive = (btn) => () => {
        setActiveBtn(btn);
    };
    const handleSetEmail = (e) => setEmail(e.target.value);
    const handleSetPass = (e) => setPass(e.target.value);
    const handleSetName = (e) => setName(e.target.value);
    const handleSetRegPass = (e) => setRegPass(e.target.value);
    const handleSetRegEmail = (e) => setRegEmail(e.target.value);
    const handleSetConfirmRegPass = (e) => setConfirmRegPAss(e.target.value);
    const handleLogin = () => dispatch(actionLogin({ email, password: pass }));
    const handleRegister = () => dispatch(actionRegister({ email: regEmail, password: regPass, name }));
    return (
        <div className='authOrRegister'>
            <h2>Log into Vinify</h2>
            <div className="setLogOrRegister">
                <button
                onClick={handleSetButtonActive('login')}
                className={ activeBtn === 'login' ? 'login-btn active' : 'login-btn' } 
                >
                    Login
                </button>
                <button
                onClick={handleSetButtonActive('singUp')}
                className={ activeBtn === 'singUp' ? 'singUp-btn active' : 'singUp-btn' }
                >
                    Sing Up
                </button>
            </div>
            { 
            activeBtn === 'login' ? (
                <>
                    <div className="email">
                        <input value={email} onChange={handleSetEmail} type="text" placeholder='Email'/>
                    </div>
                    <div className="password">
                        <input value={pass} onChange={handleSetPass} type="password" placeholder='Password'/>
                    </div>
                    <NavLink to='/' className='nav-link' ><button onClick={handleLogin} className='login-btn__main'>LOGIN</button></NavLink>
                    <NavLink className='forgotten-pass' to='/forgotPass'>Forgotten Password</NavLink>
                </>
            ) : (
                <>
                    <div className="reg-name">
                        <input value={name} onChange={handleSetName} type="text" placeholder='Name'/>
                    </div>
                    <div className="reg-email">
                        <input value={regEmail} onChange={handleSetRegEmail} type="text" placeholder='Email'/>
                    </div>
                    <div className="reg-password">
                        <input value={regPass} onChange={handleSetRegPass} type="password" placeholder='Password'/>
                    </div>
                    <div className="reg-password-confirm">
                        <input value={confirmRegPass} onChange={handleSetConfirmRegPass} type="password" placeholder='Confirm password'/>
                    </div>
                    <NavLink to='/' className='nav-link' ><button onClick={handleRegister} className='create-account-btn'>Create Account</button></NavLink>
                    <NavLink className='forgotten-pass' to='/forgotPass'>Forgotten Password</NavLink>
                </>
            )
            }
        </div>
    );
};

export default AuthOrRegister;