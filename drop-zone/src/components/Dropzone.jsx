import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import DropzonePreview from './DropzonePreview';
import Modal from './modal/Modal';



const DropZone = () => {
    const [files, setFiles] = useState([]);
    const [modalActive, setModalActive] = useState(false);
    const { getRootProps, getInputProps } = useDropzone({

    onDrop: acceptedFiles => {
        if(acceptedFiles.length > 5 || acceptedFiles.length < 2) {
            setModalActive(true);
            return;
        }
        setFiles(acceptedFiles.map(file => {
            if(/image\/.{0,15}/.test(file.type)) {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                });
            }
            return file;
        }));
        setFiles(acceptedFiles);
    }
    });

    return (
        <section className="container">
            { (files.length > 0) ? null : 
                            <div {...getRootProps({ className: 'dropzone' })}>
                                <input {...getInputProps()} />
                                <p>ADD FILES</p>
                            </div>
            }
            <aside>
                <DropzonePreview files={files} setFiles={setFiles} />
            </aside>
            <Modal active={modalActive} setActive={setModalActive}>
                Choose more than 2 and less than 5 items
                <button onClick={() => setModalActive(false)}>OK</button>
            </Modal>
        </section>
    );
};

export default DropZone;