import axios from "axios";
import { url } from "@/services/api"

export async function getUser(){
  try{
    const response = await axios.get(`${url}/user`)
    console.log( response.data)

  }catch(error: Error | unknown){
    console.error(error)
  }
 
}

