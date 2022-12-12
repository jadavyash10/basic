import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function RegistrationForm() {
  const radioOptions = [
    { key: "Email", value: "emailmoc" },
    { key: "Telephone", value: "telephonemoc" },
  ];
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
    modeOfContact: Yup.string().required("Required"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephonemoc",
      then: Yup.string().required("Required"),
    }),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  const formArr = [
    {
      control: "input",
      type: "email",
      lable: "Email",
      name: "email",
    },
    { control: "input", type: "password", lable: "Password", name: "password" },
    {
      control: "input",
      type: "password",
      lable: "Confirm Password",
      name: "confirmPassword",
    },
    {
      control: "radio",
      lable: "Mode of contact",
      name: "modeOfContact",
      options: { radioOptions },
    },
    {
      control: "input",
      type: "text",
      lable: "Phone number",
      name: "phone",
    },
  ];
  console.log("formArr", formArr);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            {formArr?.map((v, i) => {
              return <FormikControl key={i} {...v} />;
            })}
            <button type="submit">submit</button>
          </Form>
        );
      }}
      {/* {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              lable="Email"
              name="email"
            />
            <FormikControl
              control="input"
              type="password"
              lable="Password"
              name="password"
            />
            <FormikControl
              control="input"
              type="password"
              lable="Confirm Password"
              name="confirmPassword"
            />
            <FormikControl
              control="radio"
              lable="Mode of contact"
              name="modeOfContact"
              options={options}
            />
            <FormikControl
              control="input"
              type="text"
              lable="Phone number"
              name="phone"
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }} */}
    </Formik>
  );
}

export default RegistrationForm;
