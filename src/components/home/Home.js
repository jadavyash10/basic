import Helmet from "react-helmet";
import * as R from "ramda";

const Home = () => {
  console.log(R.add(12,21))
  console.log(R.add(32)(3))
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta charset="utf-8" />
        <meta name="description" content="Basic example" />
        <meta name="keywords" content="Music, Audio, Lyrics" />
        <style></style>
      </Helmet>
      Home
    </div>
  );
};

export default Home;
