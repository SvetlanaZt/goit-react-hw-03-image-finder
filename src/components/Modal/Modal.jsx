
import React from 'react';
import css from './modal.module.css'

export default class Modal extends React.Component {
  state = {
    showModalEl: false,
  }

  componentDidMount() {
    console.log('componentDidMount')
    window.addEventListener('keydown', this.handelKeyDown)
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handelKeyDown)
  }
  handelKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.closeModal(true)
    }
  }

  handelBackdrop = evt => {
    if (evt.target === evt.currentTarget) {
        this.props.closeModal(true)
    }
  }
  render() {
    return (
      <div className={css.overlay} onClick={this.handelBackdrop}>
        <div className={css.modal}>
          <img src={this.props.src} alt={this.props.alt} />
        </div>
      </div>
    )
  }
}

