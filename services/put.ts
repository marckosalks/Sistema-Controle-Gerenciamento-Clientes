import axios from "axios";
import { url } from "@/services/api";

export async function updateUser(id: number | undefined, data: any){
  try{
    const response = await axios.put(`${url}/user/${id}`, data)
    console.log('atualizado',response.data)
  }catch(error: Error|unknown){
    console.error(error)
  }
}