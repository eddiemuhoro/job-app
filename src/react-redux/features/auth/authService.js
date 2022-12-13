import axios from 'axios'

const API_URL = 'https://expressjs-production-e1ab.up.railway.app/';

const register = async(userData)=>{
    const response = await axios.post(API_URL + 'register', userData)
    if(response.date){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data
}

const login = async (userData)=>{
    const response = await axios.post(API_URL + 'login', userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

const logout = ()=>{
    localStorage.removeItem('user');
}


const authService ={
    login,
    register,
    logout
}

export default authService