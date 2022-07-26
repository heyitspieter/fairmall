import axios from 'axios';

const prompt_login = 'Please Login';

axios.interceptors.request.use(
  async request => {
    console.log(request.url, request.method, JSON.stringify(request.data));
    const token = await AsyncStorage.getItem('token');

    // console.log('token', token);
    if (!token && !request.url.includes('/auth')) {
      throw new Error(prompt_login);
    }
    request.headers.Authorization = `x-access-token ${await localStorage.getItem(
      'token',
    )}`;
    return request;
  },
  error => {
    if (error.message === prompt_login) {
      window.location.href = '/';
      console.log('error from axios', error);
    }
    console.warn(error?.response?.data);
    return Promise.reject(error);
  },
);

// Intercept all responses
axios.interceptors.response.use(
  async response => {
    console.log(
      response.config.url,
      response.config.method,
      response.status,
      JSON.stringify(response.data),
    );
    return response;
  },
  error => {
    console.warn(error?.response?.data);
    if ([403, 401].includes(error?.response?.status)) {
      error.message = prompt_login;
      window.location.href = '/';
      console.log('error from axios', error);

    } else if (error?.response?.data) {
      error.message = error.response.data.message;
    }
    return Promise.reject(error);
  },
);

export default axios;
