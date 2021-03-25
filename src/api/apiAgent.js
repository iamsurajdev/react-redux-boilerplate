import axios from "./axiosConfig";

export const Get = (url, params, token) => {
  let tokenDetails = token ? token : localStorage.getItem("access_token");
  let header = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: tokenDetails ? "Bearer " + tokenDetails : "",
  };
  return new Promise((resolve, reject) => {
    return axios
      .get(url, {
        params,
        headers: header,
      })
      .then(({ data: response }) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const Post = (
  url,
  params,
  token = "",
  contentType = "application/json"
) => {
  let tokenDetails = token ? token : localStorage.getItem("access_token");
  let header = {
    "Content-Type": contentType,
    Authorization: tokenDetails ? "Bearer " + tokenDetails : "",
  };
  return new Promise((resolve, reject) => {
    return axios
      .post(url, params, {
        headers: header,
      })
      .then(({ data: response }) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const Put = (url, params, contentType = "multipart/form-data") => {
  return new Promise((resolve, reject) => {
    return axios
      .put(url, params, {
        headers: {
          "Content-Type": contentType,
          Authorization: localStorage.getItem("access_token")
            ? "Bearer " + localStorage.getItem("access_token")
            : "",
        },
      })
      .then(({ data: response }) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const Patch = (url, params) => {
  return new Promise((resolve, reject) => {
    return axios
      .patch(url, params)
      .then(({ data: response }) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const Delete = (url, params) => {
  return new Promise((resolve, reject) => {
    return axios
      .delete(url, {
        params,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then(({ data: response }) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
