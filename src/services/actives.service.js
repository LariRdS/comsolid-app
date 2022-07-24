import axios from 'axios';

const host = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 30000,
});

const activesExplore = async () => {
  try {
    const [getActives] = await host
      .get('/actives')
      .then((res) => console.log(res))
      .catch((error) => error.message);
    if (getActives) {
      return getActives;
    }
    return false;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default { activesExplore };
