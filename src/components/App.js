import React, { Component } from 'react';
// components
import Headline from './Headline/Headline';
import Gallery from './Gallery/Gallery';
import Spinner from './Spinner/Spinner';
// api
import getAllGalleryItems from '../services/api';

const INITIAL_STATE = {
  galleryList: [],
  isLoading: false,
};
export default class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    this.setState({ isLoading: true });
    getAllGalleryItems().then(galleryList => {
      this.setState({ galleryList, isLoading: false });
    });
  }

  render() {
    const { galleryList, isLoading } = this.state;
    return (
      <div>
        <Headline />
        {isLoading ? <Spinner /> : <Gallery galleryList={galleryList} />}
      </div>
    );
  }
}
