import React, { Component } from 'react';
// components
import Headline from './Headline/Headline';
import Gallery from './Gallery/Gallery';
import Spinner from './Spinner/Spinner';
import Range from './Range/Range';
// api
import getAllGalleryItems from '../services/api';
// styles
import styles from './App.module.css';

const INITIAL_STATE = {
  galleryList: [],
  isLoading: false,
  minComments: 0,
  enableAutoRefresh: false,
};
export default class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    this.setState({ isLoading: true });
    getAllGalleryItems().then(galleryList => {
      this.setState({ galleryList, isLoading: false });
    });
  }

  updateMinComments = ({ target: { value } }) => {
    this.setState({
      minComments: Number(value),
    });
  };

  getItemsByComments = (galleryList, minComments) =>
    galleryList
      .filter(item => item.data.num_comments >= minComments)
      .sort((a, b) => b.data.num_comments - a.data.num_comments);

  updateAutoRefresh = () => {
    const { enableAutoRefresh } = this.state;
    if (!enableAutoRefresh) {
      this.autoRefresh = setInterval(() => {
        getAllGalleryItems();
      }, 3000);
    } else {
      clearInterval(this.autoRefresh);
    }
    this.setState({
      enableAutoRefresh: !enableAutoRefresh,
    });
  };

  getItemsByComments = (galleryList, minComments) =>
    galleryList
      .filter(item => item.num_comments >= minComments)
      .sort((a, b) => b.num_comments - a.num_comments);

  render() {
    const {
      galleryList,
      isLoading,
      enableAutoRefresh,
      minComments,
    } = this.state;

    const itemsByComments = this.getItemsByComments(galleryList, minComments);

    return (
      <div className={styles.container}>
        <Headline text="Top commented." />
        <button
          className={styles.btn}
          type="button"
          onClick={this.updateAutoRefresh}
        >
          {enableAutoRefresh ? 'Stop auto-refresh' : 'Start auto-refresh'}
        </button>
        <Range
          minComments={minComments}
          updateMinComments={this.updateMinComments}
        />
        {isLoading ? <Spinner /> : <Gallery galleryList={itemsByComments} />}
      </div>
    );
  }
}
