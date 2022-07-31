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
    largeImageUrl: '',
    page: 1,
  }
  componentDidUpdate(prevProps, prevState) {
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    const prevName = prevState.imgName;
    const nextName = this.state.imgName;

        if (prevName !== nextName || prevPage !== nextPage) {
            const key = '27593134-a882df11ea431345edf986e72';
            fetch(`https://pixabay.com/api/?q=${nextName}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(data => {
                    if (data.ok) {
                        return data.json()
                    }
                    return Promise.reject(new Error(`Нет такого имени ${nextName}`))
                })
                .then(data => this.setState({ dataImgs: data.hits, status: 'resolved' }))
            .catch(error => this.setState({error, status: 'rejected'}))
        }
    }
  takeNameImg = (nameImg) => {
    this.setState({ imgName: nameImg.name })
  }
  showModalToggle = evt => {
        this.setState(prevState => ({
          showModal: !prevState.showModal,
        }))
    this.setState({
      largeImageUrl: evt.target.attributes.largeimageurl.textContent,
    })
    
  }
  loadMore  = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
   }

  render() {
    const { dataImgs, status, largeImageUrl } = this.state;
    return (
      <>
        <Searchbar onClick={this.takeNameImg} />
        {status === 'resolved' && (
          <ImageGallery imgName={dataImgs} onClickImg={this.showModalToggle} takeLargeImg={this.largeImg} />
        )}
        {this.state.showModal && <Modal alt={'cat'} src={largeImageUrl} closeModal={this.showModalToggle} />}
        <button tyoe='button' onClick={this.loadMore}> Load More</button>
      </>

    )
  }
}