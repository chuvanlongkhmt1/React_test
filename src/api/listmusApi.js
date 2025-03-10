import axiosClient from "./axiosClient";

const listmusApi = {
  getAll(params) {
    const url = "/todos";
    return axiosClient.get(url, { params });
  },
};
export default listmusApi;
