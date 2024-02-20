import axios from "axios";
import { url } from "@/services/api"

export async function postUser(data: any){
  try{
    const response = await axios.post(`${url}/user`,data)
    console.log(response.data)
    return 'success'
  }catch(error: Error | unknown){
    console.error(error)
    return 'error'
  }finally{
    console.log("fim de jogo")
  }
 
}

