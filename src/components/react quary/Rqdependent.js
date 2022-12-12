import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const fetchbyemail = (email) => {
  return axios.get(`http://localhost:4000/persons/${email}`);
};

const fetchTechbyTechid = (techid) => {
  return axios.get(`http://localhost:4000/technologies/${techid}`);
};

const Rqdependent = ({ email }) => {
  const { data: person, error } = useQuery(["person", email], () =>
    fetchbyemail(email)
  );
  const techid = person?.data.technologyid;

  const { data: technologies, technologieserror } = useQuery(
    ["technologies", techid],
    () => fetchTechbyTechid(techid),
    {
      enabled: !!techid,
    }
  );

  console.log(technologies);
  return (
    <div>
      Rqdependent
      <div>
        {technologies?.data?.field?.map((v, i) => {
          return <div key={i}>{v}</div>;
        })}
      </div>
      <ReactQueryDevtools initialIsOpen={true} position="bottom-right" />
    </div>
  );
};

export default Rqdependent;
