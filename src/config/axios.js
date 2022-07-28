import axios from "axios";

const prompt_login = "Please Login";

axios.interceptors.request.use(
  async (request) => {
    // console.log(request.url, request.method, JSON.stringify(request.data));
    const token = localStorage.getItem("token");

    // console.log('token', token);
    // if (!token && request.url.includes("/auth")) {
    //   // console.log("prompt login 1");
    //   throw new Error(prompt_login);
    // }
    request.headers.Authorization = `x-access-token ${localStorage.getItem("token")}`;
    return request;
  },
  (error) => {
    if (error.message === prompt_login) {
      // console.log("prompt login 2");
      // window.location.href = '/';
      // console.log("error from axios", error);
    }
    console.warn(error?.response?.data);
    return Promise.reject(error);
  }
);

// Intercept all responses
axios.interceptors.response.use(
  async (response) => {
    // console.log(response.config.url, response.config.method, response.status, JSON.stringify(response.data));
    return response;
  },
  (error, e) => {
    console.warn(error?.response?.data);
    if ([403, 401].includes(error?.response?.status)) {
      // console.log("prompt login 3");
      e.preventDefault();
      error.message = prompt_login;
      window.location.href = '/signin';
      console.log("error from axios", error);
    } else if (error?.response?.data) {
      error.message = error.response.data.message;
    }
    return Promise.reject(error);
  }
);

export default axios;
