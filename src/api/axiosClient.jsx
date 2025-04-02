import axios from "axios";
import Swal from "sweetalert2";
window.Swal = Swal;
const axiosClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: { Authorization: localStorage.getItem("token"),"Content-Type": "multipart/form-data"}
});
// Add a response interceptor
axiosClient.interceptors.response.use(
   (response) => {
    if(response.data.message){
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      if(response.data.redirect){
        window.location = (response.data.redirect)
      }
      }
    return response;
  },
  (error) => {
    const errormes = error.response?.data?.error || "error, please try again";
    Swal.fire({
      icon: "error",
      title: errormes,
      showConfirmButton: false,
      timer: 1500,
    });
    if(error.response.data.redirect==='/signin'){
      window.location = (error.response.data.redirect)
    }
    return Promise.reject(error);
  }
);
export default axiosClient;
