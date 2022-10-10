import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const RadioButton = (props) => {
  const { lable, name, type, options, ...rest } = props;

  return (
    <div>
      <label>{lable} : </label>
      <Field name={name}>
        {({ field }) => {
          return options?.radioOptions?.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioButton;
