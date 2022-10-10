import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const Select = (props) => {
  const { lable, name, type, options, ...rest } = props;
  return (
    <div>
      <label>{lable} : </label>
      <Field as="select" id={name} name={name} {...rest}>
        {options?.Dropdownoptions?.map((option, i) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
