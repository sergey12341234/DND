import React, { useState } from 'react';
import { actionAddVine } from '../store/vineSlice';
import { useDispatch } from 'react-redux/es/exports';
import MyDropzone from '../components/dropzone/Dropzone';

const Modal = ({ active, setActive }) => {
    const dispatch = useDispatch();
    const [files, setFiles] = useState([]);
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [grape, setGrape] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const handleSetName = (e) => setName(e.target.value);
    const handleSetCountry = (e) => setCountry(e.target.value);
    const handleSetRegion = (e) => setRegion(e.target.value);
    const handleSetGrape = (e) => setGrape(e.target.value);
    const handleSetType = (e) => setType(e.target.value);
    const handleSetPrice = (e) => setPrice(e.target.value);
    const handleAddItem = () => {
        dispatch(actionAddVine({ name, country, region, grape, type, price }));
        setName('');
        setCountry('');
        setRegion('');
        setGrape('');
        setType('');
        setPrice('');
        setActive('');
        setFiles([]);
    };
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()}>
                <input value={name} onChange={handleSetName} type="text" placeholder='Wine name' />
                <input value={country} onChange={handleSetCountry} type="text" placeholder='Country' />
                <input value={region} onChange={handleSetRegion} type="text" placeholder='Region' />
                <input value={grape} onChange={handleSetGrape} type="text" placeholder='Grape' />
                <input value={type} onChange={handleSetType} type="text" placeholder='Type' />
                <input value={price} onChange={handleSetPrice} type="text" placeholder='Price' />
                <MyDropzone files={files} setFiles={setFiles} />
                <button onClick={handleAddItem}>ADD</button>
            </div>
        </div>
    );
};

export default Modal;