import { getLocalStorage } from '../assets/functions';

export default function authService() {
  try {
    const getToken = getLocalStorage('token');
    if (getToken) {
      return getToken;
    }
    return false;
  } catch (error) {
    throw new Error(error.message);
  }
}
