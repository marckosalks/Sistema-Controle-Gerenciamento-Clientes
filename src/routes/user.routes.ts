import { post } from "../controller/user.controller";

export function UserRoutes(app: any){
  app.post("/user", post)
}