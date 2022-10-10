import axios from "axios";

export const fetchdata = () => {
  const userpromise = fetchUser();
  const postpromise = fetchPost();
  return {
    user: wrappromise(userpromise),
    post: wrappromise(postpromise),
  };
};

const wrappromise = (promise) => {
  let status = "pending";
  let result;

  let suspender = promise.then(
     (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

const fetchUser = () => {
  console.log("fetching users .....");
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const fetchPost = () => {
  console.log("fetching users .....");
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data.slice(0,5))
    .catch((err) => console.log(err));
};
