import { useState } from "react";
import axios from "axios";
import { useMutation, useQuery } from "react-query";

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

const AddData = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const addFriend = (data) => {
    return axios.post("http://localhost:4000/friends", data);
  };
  const { data, error, isFetching, isLoading, isError, refetch } = useQuery(
    ["friends"],
    fetchFriends
  );

  const { mutate } = useMutation(addFriend);

  const handleSubmit = () => {
    console.log(id, name);
    const friend = { id, name };
    mutate(friend);
  };

  return (
    <>
      <div>
        AddData
        <input
          type="number"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
      <div>
        <button onClick={refetch}>Fetch</button>
        {data?.data.map((data) => {
          return (
            <div key={data.id}>
              {data.id}-{data.name}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AddData;
