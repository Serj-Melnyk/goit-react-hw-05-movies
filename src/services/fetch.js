import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';

const KEY = '7c6a11c2d8e8524ccfd41d8aedf2bd73';

async function getTrendingMovies() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
export default getTrendingMovies;
