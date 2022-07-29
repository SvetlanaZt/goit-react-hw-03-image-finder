// import React from 'react';
// import Modal from 'components/Modal/Modal'
import css from './ImageGalleryItem.module.css'


export default function ImageGalleryItem({id, webformatURL, tags, largeimageurl}) {
    return (
        <>
        <li className={css.imageGalleryItem} key={id}>
                <img className={css.imageGalleryItemImage} src={webformatURL} alt={tags} largeimageurl={largeimageurl } /></li>

        </>)
            
   
}


