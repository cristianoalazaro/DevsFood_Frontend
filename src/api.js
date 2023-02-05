import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.b7web.com.br/devsfood/api'
})

//const BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategorias: async () => {
        //GET categories
        const res = await api.get('/categories')
        return res.data;
    },

    getProducts: async () => {
        //GET Products ([search, page, category])
        const res = await api('/products')
        return res.data;
    }
}