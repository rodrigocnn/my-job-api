import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export const userUpdateSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
});
