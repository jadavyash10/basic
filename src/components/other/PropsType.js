import React from "react";
import { PropTypes } from "prop-types";
const PropsType = ({ name, age, title, demo, adress }) => {
  return (
    <div>
      {demo} {name} and i'm{age} old {title} {adress}
    </div>
  );
};

PropsType.propTypes = {
  name: PropTypes.string,
  age: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
  salary: PropTypes.number.isRequired,
  num: PropTypes.array.isRequired,
  add: PropTypes.object,
  istrue: PropTypes.oneOf([true, false, 0, "Unknown"]),
  arrOfObj: PropTypes.arrayOf(PropTypes.object).isRequired,
};
PropsType.defaultProps = {
  demo: "Hello my name is",
};

export default PropsType;
