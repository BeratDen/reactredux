import Yup from "./validation";

export const ContactSchema = Yup.object().shape({
  name: Yup.string().min(6).required(),
  about: Yup.string().required(),
  accept: Yup.boolean().oneOf([true]),
  gender: Yup.string().required(),
  avatar: Yup.mixed().test({
    message: "Bir avatar seçmelisiniz",
    test: (file) => file?.name,
  }),
  level: Yup.string().required("Bir Seviye Belirleyin"),
  // skills: Yup.mixed().test({
  //   message: "2 den fazla yetenek seçmelisiniz.",
  //   test: selected => selected.lenght > 2,
  // }),
});
