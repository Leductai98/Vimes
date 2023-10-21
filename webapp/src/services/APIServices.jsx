import axios from "axios";

const baseUrl=axios.create({
    baseURL:'http://localhost:5000'
})

export const getList=async()=>{
    const response= await baseUrl.get(`/list`)
    return response.data
}

export const saveList = async(value)=>{
    const response= await baseUrl.post('/list',value)
    return response.data
}

export const getDetail= async()=>{
    const response= await baseUrl.get('/detail')
    return response.data
}