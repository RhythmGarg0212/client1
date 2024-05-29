import axios from "axios";
import store from "../slice/store";
import { deleteUser, getItem, Key_Access_Token, setItem } from "./localStorage";
import { setLoading, showToast } from "../slice/appConfigSlice";
import { TOAST_ERROR } from "../App";
export const axiosClient = axios.create({
  // baseURL: "http://localhost:4003",
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  withCredentials: true,
});
axiosClient.interceptors.request.use(request => {
  store.dispatch(setLoading(true));
  const accesstoken = getItem(Key_Access_Token);
  request.headers["Authorization"] = `Bearer ${accesstoken}`;
  return request;
});

axiosClient.interceptors.response.use(
  async respone => {
    const data = respone.data;
    // console.log(data);
    store.dispatch(setLoading(false));
    if (data.status == "ok") {
      return data;
    }
    const statuscode = data.statuscode;
    const OriginalRequest = respone.config;
    const error = data.message;

    store.dispatch(
      showToast({
        type: TOAST_ERROR,
        message: `${error}`,
      })
    );

    if (statuscode === 401 && !OriginalRequest._retry) {
      // means the access token has expired
      OriginalRequest._retry = true;

      const response = await axios
        .create({
          withCredentials: true,
        })
        // .get(`http://localhost:4003/teacher/refresh`);
        .get(`${process.env.REACT_APP_SERVER_BASE_URL}teacher/refresh`);

      // console.log("respone from backend", response);
      if (response.data.status === "ok") {
        setItem(Key_Access_Token, response.data.result.accestoken);
        OriginalRequest.headers[
          "Authorization"
        ] = `Bearer ${response.data.result.accestoken}`;

        return axios(OriginalRequest);
      } else {
        deleteUser(Key_Access_Token);
        window.location.replace("/login", "_self");

        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
  async error => {
    store.dispatch(setLoading(false));
    store.dispatch(
      showToast({
        type: TOAST_ERROR,
        message: error.message,
      })
    );
    return Promise.reject(error);
  }
);