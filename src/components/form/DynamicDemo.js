import React, { useState } from "react";
import { Arr, pass, re, validateInput } from "./ValidationForm";
import Helmet from "react-helmet";


const DynamicDemo = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});
  const exa = Object.entries(input);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [e.target.name]: e.target.value });
    setError({
      ...error,
      [name]: validateInput(name, value, input),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    Object.entries(input).forEach(([name, value]) => {
      let err = validateInput(name, value, input);
      if (err) errors[name] = err;
    });
    setError(errors);
    if (!Object.keys(errors).length) {
      reset();
    }
  };

  const reset = () => {
    setInput({ username: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div>
      <Helmet>
        <title>login</title>
      </Helmet>
      <form onSubmit={handleSubmit}>
        {Arr.map((v, i) => {
          return (
            <div key={v.id}>
              <lable>{v.name} :</lable>
              <input
                name={v.name}
                type={v.type}
                placeholder={v.placeholder}
                value={input[v.name]}
                onChange={handleChange}
              />
              {error[v.name] && (
                <small style={{ color: "red" }}>
                  {" "}
                  please enter{error[v.name]}
                </small>
              )}
            </div>
          );
        })}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default DynamicDemo;
