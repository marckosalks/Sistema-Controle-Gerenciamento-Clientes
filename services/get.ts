import axios from "axios";
import { url } from "@/services/api"

export async function getUser(){
  try{
    const response = await axios.get(`${url}/user`)
    console.log( response.data)
    return 'encontrei'
  }catch(error: Error | unknown){
    console.error(error)
    return 'não encontrei'
  }
 
}

