import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../redux/actions/UserActions.js";
import Helmet from "react-helmet";

const UserContainer = () => {
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <Helmet>
        <title>Users</title>
      </Helmet>
      {data.loading ? (
        <p>Loading...</p>
      ) : (
        data &&
        data.users &&
        data?.users?.slice(0, 10).map((v) => <h5 key={v.id}>{v.title}</h5>)
      )}
      {data && data.errors && <p>{data.errors}</p>}
    </div>
  );
};

export default UserContainer;
