import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Formik, Form } from "formik";
import Input from "../../components/form/Input";
import { LoginSchema } from "../../components/validations";

export default function Login() {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <Helmet>
        <title>Giriş Yap</title>
        <meta name="description" content="login description" />
      </Helmet>
      Login Page
      <br />
      <Formik
        initialValues={{
          userName: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          // TODO: userı api den dönen cevaba göre setliyeceğiz

          setUser(values);
          navigate(location?.state?.return_url || "/", {
            replace: true,
          });

          setTimeout(() => {
            actions.setSubmitting(false);
            actions.resetForm();
          }, 3000);
        }}
        validationSchema={LoginSchema}
      >
        {({ values, isSubmitting }) => (
          <Form className="p-6 m-4 grid shadow-lg gap-y-4 border rounded">
            <h1 className="text-2xl font-bold mb-3">Giriş Yap</h1>
            <Input label="Kullanıcı Adı" name="userName" />
            <Input label="Şifre" name="password" type="password" />
            <button type="reset"> Resetle</button>
            <button
              type="submit"
              className="w-100 h-10 bg-blue-500 block rounded text-white disabled:opacity-40"
              disabled={isSubmitting}
            >
              Giriş Yap
            </button>
          </Form>
        )}
      </Formik>
      {/* <button onClick={loginHandle}>Giriş yap</button> */}
    </div>
  );
}
