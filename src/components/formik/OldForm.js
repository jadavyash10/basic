import * as Yup from "yup";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import TextError from "./TextError";

const OldForm = () => {
  const initialValues = {
    name: "",
    email: "",
    language: "",
    comments: "",
    address: "",
    social: {
      github: "",
      facebook: "",
    },
    phNumbers: [""],
  };
  const onSubmit = (values,onSubmitProps) => {
    console.log('onsubmitprops', onSubmitProps)
    console.log("values", values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("required"),
    email: Yup.string().email("invalid email").required("required"),
    language: Yup.string().required("required"),
    comments: Yup.string().required("required"),
    // facebook: Yup.string().required("required"),
    // github: Yup.string().required("required"),
    address: Yup.string().required("required"),
  });
  const validateFacebook = (value) => {
    let error;
    if (!value) {
      error = "required";
    }
    return error;
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      //   validateOnChange={false}
      //   validateOnBlur={false}
    >
      {(formik) => {
        console.log('formik', formik)
        return (
          <Form>
            <div>
              Name: <Field type="text" name="name" />
              <ErrorMessage name="name" component={TextError} />
            </div>

            <div>
              Email: <Field type="text" name="email" />
              <ErrorMessage name="email" />
            </div>

            <div>
              Language: <Field type="text" name="language" />
              <ErrorMessage name="language">
                {(errors) => <div>{errors}</div>}
              </ErrorMessage>
            </div>

            <div>
              comments: <Field type="textarea" name="comments" />
              <ErrorMessage name="comments" />
            </div>

            <div>
              address:{" "}
              <FastField name="address">
                {(props) => {
                  console.log("address", props);
                  const { field, form, meta } = props;

                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>

            <div>
              Facebook:{" "}
              <Field
                type="text"
                name="social.facebook"
                validate={validateFacebook}
              />
              <ErrorMessage name="social.facebook" component={TextError} />
            </div>

            <div>
              github: <Field type="text" name="social.github" />
            </div>

            <div>
              Phone Numbers:
              <FieldArray name="phNumbers">
                {(props) => {
                  console.log("Props", props, "errors", props.form.errors);
                  const { push, remove, form } = props;
                  const { values } = form;
                  const { phNumbers } = values;
                  return (
                    <div>
                      {phNumbers.map((phNumbers, i) => (
                        <div key={i}>
                          <Field name={`phNumbers[${i}]`} />
                          {i > 0 && (
                            <button type="button" onClick={() => remove(i)}>
                              -
                            </button>
                          )}
                          <button type="button" onClick={() => push("")}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            <div>
              <button type="submit" >Submit</button>
              {/* <button type="submit" disabled={!(formik.dirty && formik.isValid)}>Submit</button> */}
              {/* <button type="submit" disabled={!(formik.isValid || formik.isSubmitting)}>Submit</button> */}
            </div>
            <div>
                {/* <button type="button" onClick={()=>formik.validateField('comments')}>validate comments</button> */}
                {/* <button type="button" onClick={()=>formik.validateForm()}>validate all</button> */}
                {/* <button type="button" onClick={()=>formik.setFieldTouched('comments')}>validate touch comments</button> */}
                {/* <button type="button" onClick={()=>formik.setTouched({
                    name:true,
                    email:true
                })}>visit Field</button> */}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default OldForm;
