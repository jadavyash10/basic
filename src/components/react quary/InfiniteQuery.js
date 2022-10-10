import axios from "axios";
import { Fragment } from "react";
import { useInfiniteQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const fetchColors = ({ pageparams = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageparams}`);
};

const InfiniteQuery = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery("colors", fetchColors, {
    getNextPageParam: (_laseName, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      {data?.pages?.map((group,i) => {
        return (
         <Fragment key={i}>
            {group.data.map((data) =>{
                return(
                    <p key={data.id}>
                        {data.id}-{data.name}
                    </p>
                )
            })}
         </Fragment>
        );
      })}
      <div>
        <button disabled={!hasNextPage} onClick={fetchNextPage}>Load more</button>
      </div>
      <div>
        {isFetching && !isFetchingNextPage ? 'Fetching...':null}
      </div>
      <ReactQueryDevtools initialIsOpen={true} position="bottom-right" />

    </>
  );
};

export default InfiniteQuery;
