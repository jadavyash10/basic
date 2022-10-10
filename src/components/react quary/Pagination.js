import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

const fetchColors = (pagenumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pagenumber}`);
};
const Pagination = () => {
  const [pagenumber, setPageNumber] = useState(1);

  const { data, isLoading, isError, isFetching, error } = useQuery(
    ["colors", pagenumber],
    () => fetchColors(pagenumber)
  );

  if (isLoading || isFetching) {
    return <p>Loading....</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <div>
      {data?.data.map((color) => {
        return (
          <div key={color.id}>
            {color.id} - {color.name}
          </div>
        );
      })}
      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pagenumber === 1}
        >
          Pre
        </button>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pagenumber === 5}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
