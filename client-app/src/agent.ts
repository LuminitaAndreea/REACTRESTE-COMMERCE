import axios, { AxiosResponse } from 'axios';
import { IProduct } from './models/product';

axios.defaults.baseURL = 'http://localhost:44301/api';

const responseBody = (response: AxiosResponse) => response.data;

// const sleep = (ms: number) => (response: AxiosResponse) => 
//     new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms));

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody) 
};

const Products = {
    list: (): Promise<IProduct[]> => requests.get('/Products1'),
    details: (productID: string) => requests.get(`/Products1/${productID}`),
    create: (product: IProduct) => requests.post('/Products1', product),
    update: (product: IProduct) => requests.put(`/Products1/${product.productID}`, product),
    delete: (productID: string) => requests.del(`/Products1/${productID}`)
}

export default {
    Products
}