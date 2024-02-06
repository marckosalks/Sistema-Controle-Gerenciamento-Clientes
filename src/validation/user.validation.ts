import * as  yup from "yup"

export const userValidation = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required().min(8),
  phone: yup.string().required(),
  zipcode: yup.string().required().min(8).max(9),
})