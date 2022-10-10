import { useState } from "react";
import Helmet from "react-helmet"

const data = {
  state: [
    { name: "gujarat", cities: ["ahmedabad", "surat", "rajkot"] },
    { name: "maharashtra", cities: ["mumbai", "pune", "thane"] },
    { name: "rajashthan", cities: ["jaipur", "jodhpur", "udaipur"] },
  ],
};

const Form = () => {
  const [item, setItem] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    hobbies: [],
    state: "",
    cities: "",
  });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState({});

  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validateForm = (value) => {
    let errors = {};

    for (let i of Object.keys(value)) {
      if (!value[i]) {
        errors[i] = `${i} is required`;
      }
      if (i === "email" && value[i] && !re.test(value[i])) {
        errors.email = "please enter valid email";
      }
      if (i === "hobbies" && value[i] && !value[i].length) {
        errors.hobbies = "please enter valid hobbies";
      }
    }
    return errors;
  };

  const handleChange = (e) => {
    setError({
      ...error,
      [e.target.name]: validateForm({ [e.target.name]: e.target.value })[
        e.target.name
      ],
    });
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(validateForm(item));
    if (
      item.name !== "" &&
      item.email !== "" &&
      re.test(item.email) &&
      item.age !== "" &&
      item.gender !== "" &&
      item.hobbies.length !== 0 &&
      item.state !== "" &&
      item.cities !== ""
    ) {
      setUsers([...users, item]);
      reset();
    }
  };

  const handlecheckbox = (e) => {
    var arr = [...item.hobbies];
    const value = e.target.value;
    const index = arr.findIndex((v) => v === value);
    if (index > -1) {
      arr = [...arr.slice(0, index), ...arr.slice(index + 1)];
    } else {
      arr.push(value);
    }
    setError({
      ...error,
      [e.target.name]: validateForm({ [e.target.name]: e.target.value })[
        e.target.name
      ],
    });
    setItem({ ...item, hobbies: [...arr] });
  };

  const reset = () => {
    setItem({
      name: "",
      email: "",
      age: "",
      gender: "",
      hobbies: [],
      state: "",
      cities: "",
    });
  };

  const availablecities = data.state.find((c) => c.name === item.state);

  return (
    <div>
      <Helmet>
        <title>Form</title>
        <meta charset="utf-8" />
        <meta name="description" content="Basic example" />
      </Helmet>
      <form onSubmit={handleSubmit}>
        <div>
          Name :
          <input
            type="text"
            name="name"
            value={item.name || ""}
            onChange={handleChange}
          />
        </div>
        {error.name && <small style={{ color: "red" }}>{error.name}</small>}
        <div>
          Email :
          <input
            type="text"
            name="email"
            value={item.email || ""}
            onChange={handleChange}
          />
        </div>
        {error.email && <small style={{ color: "red" }}>{error.email}</small>}

        <div>
          Age :
          <input
            type="number"
            name="age"
            value={item.age}
            onChange={handleChange}
          />
        </div>
        {error.age && <small style={{ color: "red" }}>{error.age}</small>}
        <div>
          Gender :
          <input
            type="radio"
            name="gender"
            checked={item.gender === "male"}
            value="male"
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            checked={item.gender === "female"}
            value="female"
            onChange={handleChange}
          />
          Female
        </div>
        {error.gender && <small style={{ color: "red" }}>{error.gender}</small>}
        <div>
          Hobbies:
          <input
            type="checkbox"
            id="writing"
            name="hobbies"
            checked={item.hobbies.includes("writing")}
            value="writing"
            onChange={handlecheckbox}
          />
          writing
          <input
            type="checkbox"
            id="photography"
            name="hobbies"
            checked={item.hobbies.includes("photography")}
            value="photography"
            onChange={handlecheckbox}
          />
          photography
          <input
            type="checkbox"
            id="cooking"
            name="hobbies"
            checked={item.hobbies.includes("cooking")}
            value="cooking"
            onChange={handlecheckbox}
          />
          cooking
        </div>
        {error.hobbies && (
          <small style={{ color: "red" }}>{error.hobbies}</small>
        )}
        <div>
          State:
          <select value={item.state} name="state" onChange={handleChange}>
            <option>select state</option>
            {data.state.map((value, index) => {
              return (
                <option value={value.name} key={index}>
                  {value.name}
                </option>
              );
            })}
          </select>
        </div>
        {error.state && <small style={{ color: "red" }}>{error.state}</small>}
        <div>
          City:
          <select value={item.cities} name="cities" onChange={handleChange}>
            <option>select cities</option>
            {availablecities?.cities?.map((value, index) => {
              return (
                <option value={value} key={index}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
        {error.cities && <small style={{ color: "red" }}>{error.cities}</small>}
        <div>
          <button>Add</button>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Hobby</th>
            <th>Age</th>
            <th>State</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((v, i) => (
            <tr key={i}>
              <td>{v.name}</td>
              <td>{v.email}</td>
              <td>{v.gender}</td>
              <td>{v.hobbies}</td>
              <td>{v.age}</td>
              <td>{v.state}</td>
              <td>{v.cities}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
