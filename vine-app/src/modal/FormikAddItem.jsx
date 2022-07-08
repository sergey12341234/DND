import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { actionAddVine } from '../store/vineSlice';
import MyDropzone from '../components/dropzone/Dropzone';

const FormikAddItem = ({ active, setActive }) => {
    const [files, setFiles] = useState([]);
    const dispatch = useDispatch();
    const handleAddItem = ({ name, country, region, grape, type, price }) => {
        dispatch(actionAddVine({ name, country, region, grape, type, price }));
    };

    const validationScheme = yup.object().shape({
        name: yup.string().required(),
        country: yup.string().required(),
        region: yup.string().required(),
        grape: yup.string().required(),
        type: yup.string().required(),
        price: yup.number('must be number').required(),
    });
    return (
        <Formik
            initialValues={{
                name: '',
                country: '',
                region: '',
                grape: '',
                type: '',
                price: '',

            }}
            validateOnBlur
            onSubmit={(values, { resetForm }) => {
                handleAddItem(values);
                setActive(false);
                resetForm({ values: '' });
            }}
            validationSchema={validationScheme}
        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, dirty, handleSubmit }) => (
                <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
                    <div className={active ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()}>
                        <input
                            name='name'
                            value={values.name}
                            onChange={handleChange}
                            handleBlur={handleBlur}
                            type="text"
                            placeholder='Wine name'
                        />
                        {touched.name && errors.name && <span className='error'>{errors.name}</span>}
                        <input
                            name='country'
                            value={values.country}
                            onChange={handleChange}
                            handleBlur={handleBlur}
                            type="text"
                            placeholder='Country'
                        />
                        {touched.country && errors.country && <span className='error'>{errors.country}</span>}
                        <input
                            name='region'
                            value={values.region}
                            onChange={handleChange}
                            handleBlur={handleBlur}
                            type="text"
                            placeholder='Region'
                        />
                        {touched.region && errors.region && <span className='error'>{errors.region}</span>}
                        <input
                            name='grape'
                            value={values.grape}
                            onChange={handleChange}
                            handleBlur={handleBlur}
                            type="text"
                            placeholder='Grape'
                        />
                        {touched.grape && errors.grape && <span className='error'>{errors.grape}</span>}
                        <input
                            name='type'
                            value={values.type}
                            onChange={handleChange}
                            handleBlur={handleBlur}
                            type="text"
                            placeholder='Type'
                        />
                        {touched.type && errors.type && <span className='error'>{errors.type}</span>}
                        <input
                            name='price'
                            value={values.price}
                            onChange={handleChange}
                            handleBlur={handleBlur}
                            type="text"
                            placeholder='Price'
                        />
                        {touched.price && errors.price && <span className='error'>{errors.price}</span>}
                        <MyDropzone files={files} setFiles={setFiles} />
                        <button
                            onClick={handleSubmit}
                            disabled={!dirty && !isValid}
                        >
                            ADD
                        </button>
                    </div>
                </div>
            )}
        </Formik>
    );
};

export default FormikAddItem;