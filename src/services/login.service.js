import axios from 'axios';

const host = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 30000,
});

const login = async (email, password) => {
  try {
    const [getUser] = await host
      .get('/users')
      .then((res) => res.data)
      .then((data) => data.filter((user) => user.email === email))
      .catch((error) => error.message);
    if (!getUser || getUser.length === 0) throw new Error('Usuário inexistente');
    if (getUser.password === password) return true;
    throw new Error('Usuário ou senha inválidos');
  } catch (error) {
    throw new Error(error.message);
  }
};

export default { login };
