import * as yup from "yup";

export const companySchema = yup.object().shape({
  name: yup.string().min(3).required(),
  size: yup.string().required(),
  website: yup.string().min(6).required(),
  linkedin: yup.string().min(6).required(),
  description: yup.string().min(6).required(),
});
