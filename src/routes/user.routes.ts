import { post, get, getAll, put, deleted } from "../controller/user.controller";

export function UserRoutes(app: any){
  app.post("/user", post)
  app.get("/user/:id", get)
  app.get("/user", getAll)
  app.put("/user/:id", put)
  app.delete("/user/:id", deleted)
}