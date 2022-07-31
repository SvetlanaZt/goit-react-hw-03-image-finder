
// import { render } from '@testing-library/react';
import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import css from './ImageGallery.module.css'

export default class ImageGallery extends React.Component {
    state = {
        id: 1,
    }
    onClick = (event) => {
   console.log(event.target)
 }
     render(){
    return ( <ul className={css.imageGallery} onClick={this.props.onClickImg}>
        {this.props.imgName.map(item => (<ImageGalleryItem key={item.id} id={item.id} webformatURL={item.webformatURL} tags={item.tags} largeimageurl={ item.largeImageURL} />))}
 </ul>)
}}
