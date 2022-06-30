import React, { useCallback, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import mp3 from '../images/mp3.jpg';
import video from '../images/video.webp';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const DropzoneItem = ({ file, index, moveCard }) => {
    const { name } = file;
    const ref = useRef(null);
    const [{ handlerId }, drop] = useDrop({
        accept: 'sortable',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });
    const [{ isDragging }, drag] = useDrag({
        type: 'sortable',
        item: () => {
            return { name, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));



    const handlerSize = useCallback((size) => {
        if (size < 1000) {
            return `${size} bytes`;
        } else if (size < 1000000 && size > 1000) {
            return `${(size / 1000).toFixed(2)} kb`;
        } else {
            return `${(size / 1000000).toFixed(2)} mb`;
        }
    }, [file.size]);

    if ((/image\/.{0,30}/.test(file.type))) {
        return (
            <div ref={ref} style={{ opacity }} data-handler-id={handlerId} className='image-preview' key={file.name}>
                <div className='image-preview__inner'>
                    <img
                        alt='img'
                        src={file.preview}
                    />
                </div>
                <p>{handlerSize(file.size)}</p>
            </div>
        );
    }
    if ((/video\/.{0,30}/.test(file.type))) {
        return (
            <div ref={ref} style={{ opacity }} data-handler-id={handlerId} className='image-preview' key={file.name}>
                <div className='image-preview__inner'>
                    <img
                        alt='img'
                        src={video}
                    />
                </div>
                <p>{handlerSize(file.size)}</p>
            </div>
        );
    }
    if ((/audio\/.{0,30}/.test(file.type))) {
        return (
            <div ref={ref} style={{ opacity }} data-handler-id={handlerId} className='image-preview' key={file.name}>
                <div className='image-preview__inner'>
                    <img
                        alt='img'
                        src={mp3}
                    />
                </div>
                <p>{handlerSize(file.size)}</p>
            </div>
        );
    }
    if ((/application\/pdf/.test(file.type))) {
        return (
            <div ref={ref} style={{ opacity }} data-handler-id={handlerId} className='pdf-preview'>
                <Document file={file}>
                        <Page width={100} pageNumber={1} />      
                </Document>
                <p>{handlerSize(file.size)}</p>
            </div>
        );
    }
};
    

    export default DropzoneItem;