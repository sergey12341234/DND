import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const MyDropzone = ({ files, setFiles }) => {
    const [active, setActive] = useState(false);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    useEffect(() => {
        if(files.length > 0) {
            setActive(true);
            return;
        }
        setActive(false);
    },[files]);
    const thumbs = files.map(file => (
        <div className='images'  key={file.name}>
            <div className='images-inner' >
                <img
                    src={file.preview}
                    onLoad={() => { URL.revokeObjectURL(file.preview); }}
                />
            </div>
        </div>
    ));

    return (
        <section className="container">
            <div  style={active ? { display: 'none' } : { display: 'flex' } } {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                ADD PHOTO
            </div>
            <aside style={ !active ? { display: 'none' } : { display: 'block' } } >
                {thumbs}
            </aside>
        </section>
    );
};

export default MyDropzone;