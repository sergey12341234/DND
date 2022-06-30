import React from 'react';

const SortableItem = ({ file,handlerSize,typeImg,handlerId,refSort }) => {
    return (
        <div ref={refSort} data-handler-id={handlerId} className='image-preview' key={file.name}>
            <div className='image-preview__inner'>
                <img
                    alt='img'
                    src={typeImg}
                />
            </div>
            <p>{handlerSize(file.size)}</p>
        </div>
    );
};

export default SortableItem;