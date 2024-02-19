import axios from "axios";
import { url } from "@/services/api";

export async function deleteUser(id: number | undefined){
  try{
    const response = await axios.delete(`${url}/user/${id}`)
    console.log('usuário deletado',response.data)
  }catch(error: Error|unknown){
    console.error(error)
  }
}