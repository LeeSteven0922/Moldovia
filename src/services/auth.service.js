import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

// this has 4 functions
const signup = (username, email, password) => {
    console.log('hi this is authservice sign up');
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,       
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  signup,
  login,
  logout,
  getCurrentUser,
};