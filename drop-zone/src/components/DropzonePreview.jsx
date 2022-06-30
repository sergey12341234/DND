import React,{ useCallback } from 'react';
import DropzoneImg from './DropzoneItem';
import update from 'immutability-helper';


const DropzonePreview = ({ files,setFiles }) => {
    const moveCard = useCallback((dragIndex, hoverIndex) => {
        setFiles((prevCards) =>
            update(prevCards, {
                $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, prevCards[dragIndex]],
                ],
            }),
        );
        }, []);
    const renderCard = useCallback((file, index) => {
        return (
            <DropzoneImg
                key={file.name}
                file={file}
                index={index}
                moveCard={moveCard}
            />
        );
    }, []);

    return (
        <div className='dropzone-preview'>
            { files.map((file, index) => renderCard(file,index)) }
        </div>
    );
};

export default DropzonePreview;