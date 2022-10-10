import axios from "axios";
import { useQueries } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const fetchUsers = (id) => {
  return axios.get(`http://localhost:4000/users/${id}`);
};
const RqdynamicParallel = ({ ids }) => {
  const results = useQueries(
    ids.map((id) => {
      return {
        queryKey: ["users", id],
        queryFn: () => fetchUsers(id),
      };
    })
  );
  console.log({ results });
  return (
    <div>
      RqdynamicParallel
      <ReactQueryDevtools initialIsOpen={true} position="bottom-right" />
    </div>
  );
};

export default RqdynamicParallel;
