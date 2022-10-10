import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

const Input = (props) => {
  const { lable, name, type, ...rest } = props;
  return (
    <div>
      <label>{lable} : </label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
