import React from 'react';
import css from './modal.module.css'


export default function Modal({ alt, src }) {
    return (
        <div className={css.overlay}>
  <div className={css.modal}>
    <img src={src} alt={alt} />
  </div>
</div>
    )
}

