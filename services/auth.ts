import axios from "axios";
import { url } from "@/services/api"

export async function loginUser(data: any){
  try{
    const response = await axios.post(`${url}/login`,data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(response.data)
    return response.data

  }catch(error: Error | unknown){
    console.error(error)
    throw new Error("Erro ao efetuar login!")
  }
}

