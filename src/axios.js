import axios from 'vue-axios'
export const api = axios.create({
        baseURL: 'http://127.0.0.1:3333/'
})