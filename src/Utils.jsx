const Utils = (imageId, size = 's') => {
    return (
        'https://i.imgur.com/' +
        imageId +
        size +
        '.jpg'
    );
}

export default Utils;