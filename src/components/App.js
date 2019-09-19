import React, { Component } from 'react';
// components
import Headline from './Headline/Headline';
import Gallery from './Gallery/Gallery';
import Spinner from './Spinner/Spinner';
import Button from './Button/Button';
import Range from './Range/Range';
// api
import getAllGalleryItems from '../services/api';

const INITIAL_STATE = {
  galleryList: [],
  isLoading: false,
  sortedByNumCommentsUp: true,
  range: 0,
  refresh: 'Start Auto Refresh',
};
export default class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    this.setState({ isLoading: true });
    getAllGalleryItems().then(galleryList => {
      this.setState({ galleryList, isLoading: false });
    });
  }

  handleChangeRange = ({ target: { value } }) => {
    this.setState({
      range: value,
    });
  };

  render() {
    const { galleryList, isLoading, refresh, range } = this.state;
    return (
      <div>
        <Headline text="Top commented." />
        <Button refresh={refresh} />
        <Range range={range} handleChangeRange={this.handleChangeRange} />
        {isLoading ? <Spinner /> : <Gallery galleryList={galleryList} />}
      </div>
    );
  }
}
