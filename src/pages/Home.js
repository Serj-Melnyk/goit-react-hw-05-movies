import { useEffect } from 'react';
import getTrendingMovies from 'services/fetch';
// import axios from 'axios';

const Home = () => {
  useEffect(() => {
    getTrendingMovies().then(getTrendingMovies);
  }, []);

  return <div>Home</div>;
};

export default Home;
