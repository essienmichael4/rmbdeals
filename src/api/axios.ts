import axios, { AxiosInstance } from "axios";

export const axios_instance : AxiosInstance = axios.create({
    baseURL: "https://api.rmbdeals.com/api/v1"
});

export const axios_instance_token : AxiosInstance = axios.create({
    baseURL: "https://api.rmbdeals.com/api/v1"
});
