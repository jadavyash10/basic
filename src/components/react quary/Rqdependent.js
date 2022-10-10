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

  useQuery(["technologies", techid], () => fetchTechbyTechid(techid), {
    enabled: !!techid,
  });
  return (
    <div>
      Rqdependent
      <ReactQueryDevtools initialIsOpen={true} position="bottom-right" />
    </div>
  );
};

export default Rqdependent;
