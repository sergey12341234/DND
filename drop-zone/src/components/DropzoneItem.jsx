import React, { useRef } from 'react';
import { useDrag, useDrop, DragPreviewImage } from 'react-dnd';
import mp3 from '../images/mp3.jpg';
import video from '../images/video.webp';
import pdf from '../images/icon_pdf-150x150.png';
import { getSize } from './utils/helper';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

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
    const [{ isDragging }, drag, preview] = useDrag({
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

    if ((/image\/.{0,30}/.test(file.type))) {
        return (
            <div ref={ref} style={{ opacity }} data-handler-id={handlerId} className='image-preview' key={file.name}>
                <div className='image-preview__inner'>
                    <img
                        alt='img'
                        src={file.preview}
                    />
                </div>
                <p>{getSize(file.size)}</p>
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
                <p>{getSize(file.size)}</p>
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
                <p>{getSize(file.size)}</p>
            </div>
        );
    }
    if ((/application\/pdf/.test(file.type))) {
        return (
            <>
                <DragPreviewImage connect={preview} src={pdf} />
                <span ref={ref} data-handler-id={handlerId} style={{ opacity }} key={file.name} className='pdf-preview'>
                    <Document file={file}>
                        <Page width={100} pageNumber={1} />
                    </Document>
                    <p>{getSize(file.size)}</p>
                </span>
            </>
        );
    }
    return null;
};


export default DropzoneItem;