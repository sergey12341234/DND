import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionRegister } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { selectorAuth } from '../../store/selectors';
const FormikRegister = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogin = useSelector(selectorAuth);
    const handleRegister = (email, password, name) => dispatch(actionRegister({ email, password: password, name }));

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
            ),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must be equal').required(),
        name: yup.string().required('type name').required()
    });
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                confirmPassword: '',
                name: ''
            }}
            validateOnBlur
            onSubmit={({ email, password, name }) => handleRegister(email, password, name)}
            validationSchema={validationScheme}
        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, dirty, handleSubmit }) => (
                <>
                    <div className="reg-name">
                        <input
                            name='name'
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder='Name'
                        />
                    </div>
                    {touched.name && errors.name && <span className='error'>{errors.name}</span>}
                    <div className="reg-email">
                        <input
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder='Email'
                        />
                    </div>
                    {touched.email && errors.email && <span className='error'>{errors.email}</span>}
                    <div className="reg-password">
                        <input
                            name='password'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="password"
                            placeholder='Password'
                        />
                    </div>
                    {touched.password && errors.password && <span className='error'>{errors.password}</span>}
                    <div className="reg-password-confirm">
                        <input
                            name='confirmPassword'
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="password"
                            placeholder='Confirm password'
                        />
                    </div>
                    {touched.confirmPassword && errors.confirmPassword && <span className='error'>{errors.confirmPassword}</span>}
                    <button
                        onClick={handleSubmit}
                        className='create-account-btn'
                        disabled={!isValid && !dirty}
                    >
                        Create Account
                    </button>
                    <NavLink className='forgotten-pass' to='/forgotPass'>Forgotten Password</NavLink>
                </>
            )}
        </Formik>
    );
};

export default FormikRegister;