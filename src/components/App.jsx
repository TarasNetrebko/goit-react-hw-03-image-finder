import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loading } from './Loading/Loading';
import { ToastContainer } from "react-toastify"
import {Modal} from "./Modal/Modal"
export class App extends Component {
  state = {
    images: [],
    filter: '',
    page: 1,
    stage: 'idle',
    showModal: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const { filter, page } = this.state;
    const prevFilter = prevState.filter;
    const prevPage = prevState.page;
    if (filter !== prevFilter) {
      this.setState({ images: [], page: 1});
      this.fetchImagesHandler().catch(error => console.log).then(newArray => {
        newArray.length === 0 ? this.setState({stage: "rejected"}) : this.setState({stage: 'resolved', images: newArray})
      }
        
      );
    }
    if (prevPage !== page && prevPage < page) {
      this.fetchImagesHandler().then(newArray =>
        this.setState({
          stage: 'resolved',
          images: [...this.state.images, ...newArray],
        })
      );
    }
  }
  toggleModal = () => {
    this.setState((({ showModal}) => ({ showModal: !showModal})))

  }
  async fetchImagesHandler() {
    this.setState({ stage: 'pending' });
    const { filter, page } = this.state;
    return await fetch(
      `https://pixabay.com/api/?q=${filter}&page=${page}&key=28124365-0ad47717ab252182c329a634e&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(({ hits }) =>
        hits.map(({ id, webformatURL, largeImageURL }) => {
          return {
            id: id,
            webformatUrl: webformatURL,
            largeImageURL: largeImageURL,
          };
        })
      );
  }
  searchSubmitHandler = filter => {
    this.setState({ filter, page: 1 });
  };
  loadMoreHandler() {
    this.setState({ page: this.state.page + 1 });
  }
  render() {
    const { stage, showModal } = this.state;
    if (stage === 'idle') {
      return ( 
        <>
          <Searchbar onSubmit={this.searchSubmitHandler} />
          <span>To show gallery of images, please enter a search term</span>
          <ToastContainer autoClose={3000} />
        </>
      )
    }
    if (stage === 'pending') {
      return (
        <>
          <Searchbar onSubmit={this.searchSubmitHandler} />
          {this.state.images.length > 0 && (
            <ImageGallery images={this.state.images} />
          )}
          <Loading />
        </>
      );
    }
    if (stage === 'resolved') {
      return (
        <>
          <Searchbar onSubmit={this.searchSubmitHandler} />
          <ImageGallery images={this.state.images} onToggle={this.toggleModal} />
          <Button onLoadMore={() => this.loadMoreHandler()} />
          {showModal && <Modal/>}
          <ToastContainer autoClose={3000} />
        </>
      );
    }
    if (stage === 'rejected') {
      return (
        <>
          <Searchbar onSubmit={this.searchSubmitHandler} />
          <img src="https://akns-images.eonline.com/eol_images/Entire_Site/201467/rs_560x415-140707115516-560.Purrmanently-Sad-Cat-kitten.ls.7814.jpg?fit=around%7C560:415&output-quality=90&crop=560:415;center,top" alt="sadKitten" width="400" height="300" />
          <span>There is no matches with: {this.state.filter}</span>
          <ToastContainer autoClose={3000} />
        </>
      );
    }
  }
}
