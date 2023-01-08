import Yup from "./validation";

export const LoginSchema = Yup.object().shape({
  userName: Yup.string().required(),
  password: Yup.string().required(),
});
