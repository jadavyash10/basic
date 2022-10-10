import { Link } from "react-router-dom";
import Helmet from "react-helmet";

const Index = () => {
  return (
    <div>
      <Helmet>
        <title>Redux</title>
      </Helmet>
      <ul>
        <li>
          <Link to="cakecontainer">CakeContainer</Link>
        </li>
        <li>
          <Link to="icecreamecontainer">IceCreameContainer</Link>
        </li>
        <li>
          <Link to="users">Users</Link>
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default Index;
