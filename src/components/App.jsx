import React from 'react';
// import Notiflix from 'notiflix';
import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import Modal from './Modal/Modal'


export class App extends React.Component { 
  state = {
    imgName: '',
    dataImgs: null,
    error: null,
    status: 'idle',
    showModal: false,
    largeImageUrlEvt: '',
  }
  componentDidUpdate(prevProps, prevState) {

        const prevName = prevState.imgName;
    const nextName = this.state.imgName;
        if (prevName !== nextName) {
            const key = '27593134-a882df11ea431345edf986e72';
            fetch(`https://pixabay.com/api/?q=${nextName}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(data => {
                    if (data.ok) {
                        return data.json()
                    }
                    return Promise.reject(new Error(`Нет такого имени ${nextName}`))
                })
                .then(data => this.setState({ dataImgs: data, status: 'resolved' }))
            .catch(error => this.setState({error, status: 'rejected'}))
        }
    }
  takeNameImg = (nameImg) => {
    this.setState({ imgName: nameImg.name })
  }
  shoeModalToggle = (evt) => {
        this.setState(prevState => ({
          showModal: !prevState.showModal,
        }))
    this.setState({largeImageUrlEvt: evt.target.largeimageurl})
  }


  render() {
    const { dataImgs, error, status, largeImageUrlEvt } = this.state;
    return (
      <>
        <Searchbar onClick={this.takeNameImg} />
        {status === 'resolved' && (
          <ImageGallery imgName={dataImgs.hits} onClickImg={this.shoeModalToggle} />
        )}
        {this.state.showModal && <Modal><img alt={dataImgs.tag} src={largeImageUrlEvt} /></Modal>}
        </>
    )
  }
}