import * as yup from "yup";

export const cartSchema = yup.object({
  activationDate: yup.string().required(),
  quantity: yup.number().min(1).required(),
});