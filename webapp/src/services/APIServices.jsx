import axios from "axios";

const baseUrl=axios.create({
    baseURL:'http://localhost:5000'
})

export const getList=async()=>{
    const response= await baseUrl.get(`/receipt`)
    return response.data
}

export const saveList = async(value)=>{
    const response= await baseUrl.post('/receipt',value)
    return response.data
}

export const deleteReceipt = async (id)=>{
    const response= await baseUrl.delete(`/receipt/${id}`)
    return response.data
}

export const getDetail= async(id)=>{
    console.log(id)
    const response= await baseUrl.get(`/detail/${id}`)
    return response.data
}

export const saveDetail = async(id,value)=>{
    const response= await baseUrl.post(`/detail/${id}`,value)
    return response.data
}

export const deleteProduct = async(id)=>{
    const response= await baseUrl.delete(`/detail/product/${id}`)
    return response.data
}