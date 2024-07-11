import axios from 'axios';
import { getCookie } from './cookie';
import { baseURL } from './globals';
axios.defaults.baseURL = baseURL; // real api
// axios.defaults.baseURL = 'http://127.0.0.1:8000'; // test api
const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZTUzZGM2OGYzOTc0NTUyNjU4ZTI1MWM2NzcwZDU0ZmNiZDMzNzRhZTUwZTdiMmVlZWFkMWY4OTgzNWMzMWYzNmE1YzE0M2Q3MTY1MDYwNmMiLCJpYXQiOjE3MTAwMTM5OTEuODIzNDQxMDI4NTk0OTcwNzAzMTI1LCJuYmYiOjE3MTAwMTM5OTEuODIzNDQyOTM1OTQzNjAzNTE1NjI1LCJleHAiOjE3NDE1NDk5OTEuODEyMTAyMDc5MzkxNDc5NDkyMTg3NSwic3ViIjoiMzI2MTkiLCJzY29wZXMiOltdfQ.Gi2oQAShmf0340iCLaJZr2oG3A-YnpX7nc7TBJq18duOC18z1TVKiU512clXXQAXrUmnlb_mOPJuqh4EFEq7Fe3wrEPay3637ry13r4JJW2ZwHiNQYVCv26N34MkdZMWciXrWAmP3E1iE1DJbOYvE5KhUuyMHoY5LGlLMGn9qayhjmlSQJRt9Q9WpA6tFUjTVxPKUBagq9W1y7mF4bKBFDh7swhESsfa1QvcZYltMrkIlqlhYQyPkDJhZ0-qEqrttwh09H-eEcteX7N9vEmshsFywkPMox14tyspnxvqL9-z0xO-h4R3SF-wu7zAKwQKUfUy_8oQafsQsuD01SL30Sus9_L2i2UdAokFA6AI8150Gb1JmX929j-Dp5xhDji4cgNZ3-KhjuN6tyo4ojHaHybqoE08HJsCt6WBe9KD4h0O3abBGMG6QHWYlnX0Avw2Ki3GkwUB1qVf7fsuA1mX-3DyLJT9v3JlOWYEiiksGxrMsRNqq0CPkm27nvBexgZbteBK9F0VS_iMoB5Ozz2p5d7LPcaoOiiRxsUjPaRzu8_684821P3BX_zTiGtWrRKRczk7wbyAphKueNp6EtTL1zbqXy65L8bcilOdMKa1Ex_qeBUSEpyc0kKheWtTg6Il3tl2VN32-X_FQsmWdb2K8eRWkZYCURvYdfxpzqXDeLE`;
// axios.defaults.headers.common.Authorization = `Bearer ${token}`

axios.defaults.headers.common['Accept-Language'] = localStorage.getItem('locale') || 'ar'
if(!!getCookie('token')) { 
	axios.defaults.headers.common.Authorization = `Bearer ${getCookie('token')}`
}

export default axios; 
