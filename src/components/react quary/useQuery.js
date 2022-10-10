import { useQuery } from "react-query";
import axios from "axios";

const fetchUsers = () => {
  return axios.get("http://localhost:4000/users");
};

export const useQueryFetch = () => {
  return useQuery("user", fetchUsers);
};
