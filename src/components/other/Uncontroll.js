import { useRef } from "react";
import {
  isEqual,
  isGreaterThan,
  objectKeys,
  objectValues,
} from "../../utils/Function";
import PropsType from "./PropsType";

const Uncontroll = () => {
  const name = useRef(null);
  const pass = useRef(null);

  const arrOfObj = [
    { name: "john", num: 1 },
    { name: "doe", num: 2 },
    { name: "fred", num: 3 },
  ];

  const obj = {
    name: "john",
    email: "asdfasdf@ad.asdf",
    age: 23,
    tech: "react js",
  };
  console.log("first", typeof arrOfObj);
  const encodedData = btoa("please come");

  const string = btoa("my name is john");

  console.log(encodedData, "asd", string);

  const decodedData = atob(encodedData);

  const compName = atob(string);

  console.log(decodedData, compName);
  console.log(
    "first",
    process.env.REACT_APP_TITLE,
    process.env.REACT_APP_DESCRIPTION,
    process.env.NODE_ENV
  );

  const getvalue = (e) => {
    e.preventDefault();
    console.log(`name :${name.current.value} pass :${pass.current.value}`);
  };

  const a = isEqual(12, 12);
  console.log(a);

  const b = isGreaterThan(121, 32);
  console.log(b);

  const c = objectValues(obj);
  console.log(c);

  const d = objectKeys(obj);
  console.log(d);
  return (
    <div>
      <form onSubmit={getvalue}>
        <div>
          <input type="text" name="name" ref={name} />
        </div>
        <div>
          <input type="password" name="password" ref={pass} />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
      <div>
        <PropsType
          name="john"
          age={22}
          salary={123}
          num={[1, 2, 3]}
          add={{ asd: "asdf" }}
          istrue={true}
          arrOfObj={arrOfObj}
        />
      </div>
      <p>{process.env.REACT_APP_TITLE}</p>
      <p>{process.env.REACT_APP_DESCRIPTION}</p>
    </div>
  );
};

export default Uncontroll;
