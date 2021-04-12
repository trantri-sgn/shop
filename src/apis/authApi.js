import axiosClient from "./axiosClient";

const authApi = {
    register(data) {
        const url = '/login';
        return axiosClient.post(url, data);
    },

}
export default authApi;