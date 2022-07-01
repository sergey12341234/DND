
export const getSize = (size) => {
    if (size < 1000) {
        return `${size} bytes`;
    } else if (size < 1000000 && size > 1000) {
        return `${(size / 1000).toFixed(2)} kb`;
    } else {
        return `${(size / 1000000).toFixed(2)} mb`;
    }
};
