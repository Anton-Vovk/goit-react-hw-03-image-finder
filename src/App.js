import React, { Component } from 'react';
import api from './services/api';
import styles from './App.module.css';
import Button from './components/Button/Button';
import Searchbar from './components/Searchbar/Searchbar';
import Loader from './components/Loader/Loader';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    images: [],
    searchQuary: '',
    currentPage: 1,
    isLoading: false,
    error: false,
    showModal: false,
    selectedImage: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuary, currentPage } = this.state;
    if (
      currentPage !== prevState.currentPage ||
      searchQuary !== prevState.searchQuary
    ) {
      try {
        this.setState({ isLoading: true });
        const result = await api(searchQuary, currentPage);
        this.setState(prevState => ({
          images: [...prevState.images, ...result.data.hits],
          isLoading: false,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      } catch {
        this.setState({
          error: true,
          isLoading: false,
        });
      }
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  onSubmit = quary => {
    this.setState({ searchQuary: quary, currentPage: 1, images: [] });
  };

  activeModal = image => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      selectedImage: image,
    }));
  };
  render() {
    const { images, isLoading, error, showModal, selectedImage } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onSubmit}></Searchbar>
        {error && <h2>Oops!</h2>}
        {showModal && (
          <Modal activeModal={this.activeModal}>
            <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
          </Modal>
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <ImageGallery
            activeModal={this.activeModal}
            showModal={showModal}
            images={images}
          ></ImageGallery>
        )}
        {shouldRenderLoadMoreButton && (
          <Button loadMore={this.loadMore}></Button>
        )}
      </div>
    );
  }
}

export default App;
