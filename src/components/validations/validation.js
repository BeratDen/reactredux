import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "Bu Alanın Doldurulması Zorunludur.",
    oneOf: "Devam Etmek İçin Bu alanı İşaretleyin.",
  },
  string: {
    min: "Bu alan en az ${min} karakter olmalıdır.",
    max: "Bu alan en fazla ${max} karakter olmalıdır.",
  },
});
export default Yup;
