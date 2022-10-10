import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Index = () => {
  return (
    <div>
      <Helmet>
        <title>Query</title>
      </Helmet>
      <ul>
        <li>
          <Link to="rqfetch">RqFetch</Link>
        </li>
        <li>
          <Link to="rquser">RqUser</Link>
        </li>
        <li>
          <Link to="rqdynamicparallel">RQdynamicparallel</Link>
        </li>
        <li>
          <Link to="rqdependent">RQdependent</Link>
        </li>
        <li>
          <Link to="InitialQuerydata">InitialQuerydata</Link>
        </li>
        <li>
          <Link to="pagination">pagination</Link>
        </li>
        <li>
          <Link to="infiniteQuery">InfiniteQuery</Link>
        </li>
        <li>
          <Link to="adddata">AddData</Link>
        </li>
      </ul>
    </div>
  );
};

export default Index;
