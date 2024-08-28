import * as yup from "yup";

export const jobSchema = yup.object().shape({
  description: yup.string().min(3).required(),
  seniority: yup.string().required(),
  workRegime: yup.string().min(6).required(),
  typeJob: yup.string().min(6).required(),
});
