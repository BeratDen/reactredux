import { Helmet } from "react-helmet";
import { Formik, Form, Field, useFormikContext } from "formik";
import Input from "../components/form/Input";
import File from "../components/form/File";
import CheckBox from "../components/form/CheckBox";
import Radio from "../components/form/Radio";
import TextArea from "../components/form/TextArea";
import Select from "../components/form/Select";
import { useEffect } from "react";
import { SampleSchema, ContactSchema } from "../components/validations";
import classNames from "classnames";

export default function Contact() {
  const AutoSubmitCode = () => {
    const { values, submitForm } = useFormikContext();
    useEffect(() => {
      if (values.code.length == 6) {
        submitForm();
      }
    }, [values, submitForm]);
    return null;
  };

  return (
    <div>
      <Helmet>
        <title>İletişim</title>
        <meta name="description" content="iletişim description" />
      </Helmet>
      Contact
      <Formik
        initialValues={{
          code: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={SampleSchema}
      >
        {({ values }) => (
          <Form className="hidden">
            <Input label="Kodu Girin" name="code"></Input>
            <button type="submit">Gönder</button>
            <AutoSubmitCode></AutoSubmitCode>
          </Form>
        )}
      </Formik>
      <>
        <Formik
          initialValues={{
            name: "",
            about: "",
            accept: false,
            skills: [],
            gender: 2,
            avatar: "",
            level: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={ContactSchema}
        >
          {({ values }) => (
            <Form className="p-6 m-4 grid shadow-lg gap-y-4 border rounded">
              <Input label="Ad Soyad" name="name" />
              <TextArea rows={6} label="Hakkında" name="about"></TextArea>
              <CheckBox
                name="accept"
                label="Kuralları Kabul Ediyorum!"
              ></CheckBox>
              <Select
                name="gender"
                label="Cinsiyet"
                options={[
                  { key: 1, value: "Kadın" },
                  { key: 2, value: "Erkek" },
                ]}
              ></Select>
              //TODO Hocanın yapmış olduğu select i multiple olarak düzenle
              {/* <Field component="select" name="skills" multiple={true}>
                <option value="php">PHP</option>
                <option value="css">CSS</option>
                <option value="js">JavaScript</option>
                <option value="html">HTML</option>
              </Field> */}
              <File name="avatar" label="avatar"></File>
              <Radio
                label="Seviyenizi Seçin"
                name="level"
                options={[
                  { key: "jr", value: "Jr. Developer" },
                  { key: "sr", value: "Sr. Developer" },
                  { key: "ninja", value: "Ninja" },
                ]}
              ></Radio>
              <button
                className={classNames({
                  "h-10 rounded bg-blue-500 text-sm text-white px-5 hover:bg-blue-700":
                    values.accept,
                  "h-10 rounded bg-blue-300 text-sm text-white px-5 pointer-events-none":
                    !values.accept,
                })}
                type="submit"
                disabled={!values.accept}
              >
                Gönder
              </button>
              {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
            </Form>
          )}
        </Formik>
      </>
    </div>
  );
}
