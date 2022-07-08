import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionLogin } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { selectorAuth } from '../../store/selectors';
const FormikLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogin = useSelector(selectorAuth);
    const handleLogin = (email, password) => dispatch(actionLogin({ email, password: password }));

    useEffect(() => {
        if (isLogin !== null) navigate('/');
    }, [isLogin]);

    const validationScheme = yup.object().shape({
        email: yup.string().email('incorrect email').required(),
        password: yup
            .string()
            .required('Please Enter your password')
            .min(6)
            .matches(
                /^.*(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number'
            )
    });
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validateOnBlur
            onSubmit={({ email, password }) => handleLogin(email, password)}
            validationSchema={validationScheme}
        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, dirty, handleSubmit }) => (
                <>
                    <div className="email">
                        <input
                            type="text"
                            name='email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            placeholder='Email'
                        />
                    </div>
                    {touched.email && errors.email && <span className='error'>{errors.email}</span>}
                    <div className="password">
                        <input
                            type="password"
                            placeholder='Password'
                            name='password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}

                        />
                    </div>
                    {touched.password && errors.password && <span className='error'>{errors.password}</span>}
                    <button
                        className='login-btn__main'
                        disabled={!dirty && !isValid}
                        onClick={handleSubmit}
                        type='submit'
                    >
                        LOGIN
                    </button>
                    <NavLink className='forgotten-pass' to='/forgotPass'>
                        Forgotten Password
                    </NavLink>
                </>
            )}
        </Formik>
    );
};

export default FormikLogin;