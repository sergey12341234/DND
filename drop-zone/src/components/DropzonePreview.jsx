import React from 'react';
import DropzoneImg from './DropzoneItem';
import update from 'immutability-helper';


const DropzonePreview = ({ files,setFiles }) => {
    const moveCard = (dragIndex, hoverIndex) => {
        setFiles((prevCards) =>
            update(prevCards, {
                $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, prevCards[dragIndex]],
                ],
            }),
        );
    };

    return (
        <div className='dropzone-preview'>
            { files.map((file, index) => <DropzoneImg key={file.name} file={file} index={index} moveCard={moveCard} />) }
        </div>
    );
};

export default DropzonePreview;