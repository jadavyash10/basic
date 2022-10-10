import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>Formik</title>
        </Helmet>
        <ul>
          <li>
            <Link to="formikform">formikform</Link>
          </li>
          <li>
            <Link to="oldform">oldform</Link>
          </li>
          <li>
            <Link to="formikcontainer">formikcontainer</Link>
          </li>
          <li>
            <Link to="Rform">RegistrationForm</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
