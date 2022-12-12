import { useState } from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

const AddData = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const queryClient = useQueryClient();

  const addFriend = (frnd) => {
    return axios.post("http://localhost:4000/friends", frnd);
  };
  const { data, error, isFetching, isLoading, isError, refetch } = useQuery(
    ["friends"],
    fetchFriends
  );
  // normal mutate
  // const { mutate } = useMutation(addFriend);

  //update list imidate add item
  // const { mutate } = useMutation(addFriend, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries("friends");
  //   },
  // });

  //not call api
  // const { mutate } = useMutation(addFriend, {
  //   onSuccess: (data) => {
  //     queryClient.setQueryData('friends', (oldQueryData) => {
  //       console.log('oldQueryData', oldQueryData)
  //       return {
  //         ...oldQueryData,
  //         data: [...oldQueryData.data, data.data],
  //       };
  //     });
  //   },
  // });

  //optimikstic update
  const { mutate } = useMutation(addFriend, {
    onMutate: async (newFrnd) => {
      await queryClient.cancelQueries("friends");
      const previousData = queryClient.getQueryData("friends");
      queryClient.setQueryData("friends", (oldQueryData) => {
        console.log("oldQueryData", oldQueryData);
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, newFrnd],
        };
      });
      return {
        previousData,
      };
    },
    onError: (_error, _frnd, context) => {
      queryClient.setQueryData("friends", context.previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("friends");
    },
  });

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
        {/* <button onClick={refetch}>Fetch</button> */}
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
