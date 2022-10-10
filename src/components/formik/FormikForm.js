import { useFormik } from "formik";
import * as Yup from "yup";
import OldForm from "./OldForm";
const FormikForm = () => {
  const initialValues = {
    name: "",
    email: "",
    language: "",
  };
  const onSubmit = (values) => {
    console.log("submit", values);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "required";
    }
    if (!values.email) {
      errors.email = "required";
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        values.email
      )
    ) {
      errors.email = "Invalid email";
    }
    if (!values.language) {
      errors.language = "required";
    }

    return errors;
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("required"),
    email: Yup.string().email("invalid email").required("required"),
    language: Yup.string().required("required"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });
  console.log("123", formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          Name:{" "}
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          Email:{" "}
          <input
            type="text"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          Language:{" "}
          <input
            type="text"
            name="language"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.language}
          />
          {formik.touched.language && formik.errors.language ? (
            <div>{formik.errors.language}</div>
          ) : null}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormikForm;
