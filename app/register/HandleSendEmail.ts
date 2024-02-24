import emailjs, { send } from "@emailjs/browser"
import toast from "react-hot-toast";

//send email quando a conta for criada
export function HandleSendEmail(name: string,  email:string, password:string){
  const templateParams = {
    to_name: name,
    email: email,
    password: password
  }
  
  emailjs.send("service_4atnenl", 
  "template_5pzawrb",
  templateParams,
  "sMn5adwNxqI3_Vv-e" )
  .then((respose) => {
    console.log("EMAIL ENVIADO", respose.status, respose.text)
    toast.success("Meus parabéns, conta criada com sucesso!")
  }, (err)=>{
    console.log("ERRO:",err)
  }) 
}