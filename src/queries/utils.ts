import axios, { AxiosRequestConfig } from 'axios';

export const apiRequest = async <T = any>(url: string, options: AxiosRequestConfig = {}) =>
    (await axios.request<T>({ url: `${process.env.NEXT_PUBLIC_API}/api/v1${url}`, ...options })).data;
