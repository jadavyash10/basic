import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";

const RQuser = () => {
  const { id } = useParams();
  const fetchUser = ({ queryKey }) => {
    const id = queryKey[1];
    return axios.get(`http://localhost:4000/users/${id}`);
  };
  const { data, error, isFetching, isLoading, isError } = useQuery(
    ["user", id],
    fetchUser
  );

  if (isLoading || isFetching) {
    return <p>Loading....</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <div>
        <p>firstname :{data?.data.first_name} </p>
        <p>Lastname :{data?.data.last_name} </p>
        <p>Email :{data?.data.email} </p>
      </div>
      <ReactQueryDevtools initialIsOpen={true} position="bottom-right" />
    </>
  );
};

export default RQuser;
