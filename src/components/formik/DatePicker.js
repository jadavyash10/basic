import "react-datepicker/dist/react-datepicker.css";
import DateView from "react-datepicker";
import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

const DatePicker = (props) => {
  const { lable, name, type, ...rest } = props;

  return (
    <div>
      <label>{lable}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => {
                setFieldValue(name, val);
              }}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default DatePicker;
