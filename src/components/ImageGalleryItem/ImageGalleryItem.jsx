// import React from 'react';
// import Modal from 'components/Modal/Modal'
import css from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';


export default function ImageGalleryItem({id, webformatURL, tags, largeimageurl}) {
    return (
        <>
        <li className={css.imageGalleryItem} id={id}>
                <img className={css.imageGalleryItemImage} src={webformatURL} alt={tags} largeimageurl={largeimageurl } /></li>

        </>)
}

ImageGalleryItem.propTypes = {
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        // largeImageURL: PropTypes.string.isRequired,
};

