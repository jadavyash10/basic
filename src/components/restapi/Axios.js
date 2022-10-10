import axios from "axios";
import React, { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

const Axios = () => {
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);
  const [data, setData] = useState([]);

  const getdata = () => {
    axios
      .get(url, { params: { _limit: 10 } })

      .then((data) => setUser(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get(`${url}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(url, {
        title: "Hello World!",
        body: "This is a new post.",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  function updatePost() {
    axios
      .put(`${url}/1`, {
        title: "Hello World!",
        body: "This is an updated post.",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  function deletePost() {
    axios.delete(`${url}/1`).then(() => {
      alert("Post deleted!");
      setPost([]);
    });
  }

  const getall = () => {
    axios
      .all([
        axios.get("https://jsonplaceholder.typicode.com/posts"),
        axios.get("https://jsonplaceholder.typicode.com/todos"),
      ])
      // .then(axios.spread((posts,todos) => console.log("todo",todos)))
      .then((res) => {
        console.log("all", res[0]);
        console.log("all", res[1]);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const fetchData = async () => {
    try {
      let res = await axios.get("http://localhost:3000/users");
      console.log("try", res);
      setData(res.data);
    } catch (err) {
      console.log("error", err);
    }
  };

  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  });

  useEffect(() => {
    client.get("/1").then((response) => {
      console.log("first", response);
    });
    client.delete("/2").then((response) => {
      console.log("first", response);
    });
  }, []);

  useEffect(() => {
    getdata();
  }, []);
  useEffect(() => {
    getall();
  }, []);
  useEffect(() => {
    fetchData();
  }, []);

  if (!post) return "No post!";

  return (
    <div>
      {user.map((data) => {
        return <div key={data.id}>{data.title}</div>;
      })}

      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
      <button onClick={updatePost}>Update Post</button>
      <button onClick={deletePost}>delete Post</button>

      <div>
        {data.map((value) => {
          return <div key={value.id}>{value.first_name}</div>;
        })}
      </div>
    </div>
  );
};

export default Axios;
