import axios from 'axios';

axios.defaults.baseURL = 'https://www.reddit.com';

const getAllGalleryItems = async () => {
  const response = await axios.get('/r/reactjs.json?limit=100');
  return response.data.data.children.map(obj => obj.data);
};
export default getAllGalleryItems;
