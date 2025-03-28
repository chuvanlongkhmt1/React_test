import axios from "axios";
import Swal from "sweetalert2";
window.Swal = Swal;
const axiosClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: { Authorization: localStorage.getItem("token"),"Content-Type": "multipart/form-data"}
});
// Add a response interceptor
// axiosClient.interceptors.request.use(
//   (config) => {
//  },
// );
axiosClient.interceptors.response.use(
   (response) => {
    if(response.data.message){
    Swal.fire({
      icon: "success",
      title: response.data.message,
      showConfirmButton: false,
      timer: 1500,
    });}
    return response;
  },
  (error) => {
    const errormes = error.response?.data?.error || "error, please try again";
    Swal.fire({
      icon: "error",
      title: errormes,
      showConfirmButton: false,
      timer: 5000,
    });
    return Promise.reject(error);
  }
);
export default axiosClient;
