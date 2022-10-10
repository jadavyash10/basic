import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const CheckboxButton = (props) => {
  const { lable, name, type, options, ...rest } = props;

  return (
    <div>
      <label>{lable} : </label>
      <Field name={name}>
        {({ field }) => {
          return options?.checkboxOptions?.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
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

export default CheckboxButton;
