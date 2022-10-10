import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const Dropdownoptions = [
    { key: "selectoptions", value: "" },
    { key: "option 1", value: "option 1" },
    { key: "option 2", value: "option 2" },
    { key: "option 3", value: "option 3" },
  ];

  const radioOptions = [
    { key: "option 1", value: "option 1" },
    { key: "option 2", value: "option 2" },
    { key: "option 3", value: "option 3" },
  ];
  const checkboxOptions = [
    { key: "option 1", value: "option 1" },
    { key: "option 2", value: "option 2" },
    { key: "option 3", value: "option 3" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("required"),
    description: Yup.string().required("required"),
    selectOption: Yup.string().required("required"),
    radioOption: Yup.string().required("required"),
    checkboxOption: Yup.array().required("required"),
    birthDate: Yup.date().required("required").nullable(),
  });

  const onSubmit = (values) => {
    console.log("first", values);
  };

  const FormArr = [
    {
      lable: "Email",
      name: "email",
      type: "email",
      control: "input",
    },
    {
      lable: "Description",
      name: "description",
      control: "textarea",
    },
    {
      lable: "Select a topic",
      name: "selectOption",
      options: { Dropdownoptions },
      control: "select",
    },
    {
      lable: "Radio topic",
      name: "radioOption",
      options: { radioOptions },
      control: "radio",
    },
    {
      lable: "checkbox topic",
      name: "checkboxOption",
      options: { checkboxOptions },
      control: "checkbox",
    },
    {
      lable: "Pick a date",
      name: "birthDate",
      control: "date",
    },
  ];
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            {FormArr?.map((v, i) => {
              return <FormikControl key={i} {...v} />;
            })}
            <button type="submit">submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
