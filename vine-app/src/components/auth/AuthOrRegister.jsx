import React, { useState } from 'react';
import FormikLogin from './FormikLogin';
import FormikRegister from './FormikRegister';

const AuthOrRegister = () => {
    const [activeBtn, setActiveBtn] = useState('login');
    const handleSetButtonActive = (btn) => () => {
        setActiveBtn(btn);
    };
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
            activeBtn === 'login' ? <FormikLogin /> : <FormikRegister />
            }
        </div>
    );
};

export default AuthOrRegister;