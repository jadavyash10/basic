import { useQuery } from "react-query";
import axios from "axios";
import { ReactQueryDevtools } from "react-query/devtools";
import { useQueryFetch } from "./useQuery";
import { Link } from "react-router-dom";

const fetchData = () => {
  return axios.get("http://localhost:4000/users");
};

const onSuccess = (data) => {
  console.log("call after succesfully data has been fetched", data);
};
const onError = (error) => {
  console.log("call after  data has been error", error);
};

const RQfetch = () => {
  const { data, isError, isFetching, isLoading, error, refetch } =
    // useQueryFetch();
    useQuery("data", fetchData, {
      // refetchInterval: 1000,
      // refetchIntervalInBackground:true,
      enabled: false,
      onSuccess,
      onError,
      // select: (data) => {
      //   const name = data.data.map((user) => user.first_name);
      //   return name;
      // },
    });

  console.log(isLoading, isFetching);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <h2>React Query Fetch data</h2>
      {data?.data.map((user) => (
        <p key={user.id}>
          <Link to={`/query/rquser/${user.id}`}>{user.first_name}</Link>
        </p>
      ))}

      {/* {data?.data.map((user) => (
        <p key={user.id}>{user.first_name}</p>
      ))} */}

      {/* {data?.map((user) => {
        return <p key={user}>{user}</p>;
      })} */}
      <button onClick={refetch}>FetchData</button>
      <ReactQueryDevtools initialIsOpen={true} position="bottom-right" />
    </>
  );
};

export default RQfetch;
