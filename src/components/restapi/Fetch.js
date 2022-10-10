import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);

  let _data = [
    {
      id: "11",
      name: "John",
      phone: 1234567898,
    },
    {
      id: "12",
      name: "doe",
      phone: 1234567898,
    },
  ];

  //fetch api get methods
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
    console.log("first", data);
  };

  //fetch api post method
  const fetchpost = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(_data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => console.log("post", data));
  };

  //fetch api put method
  const fetchput = () => {
    fetch("https://jsonplaceholder.typicode.com/users/5", {
      method: "PUT", // or "PUT" with the url changed to, e.g "https://reqres.in/api/users/2"
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: "Capitain Anonymous" }),
    })
      .then((res) => {
        if (res.ok) {
          console.log("HTTP request successful");
        } else {
          console.log("HTTP request unsuccessful");
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  //fetch api delete method
  const fetchdelete = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "DELETE",
    })
      .then((res) => console.log("delete", res.status))
      .catch((err) => console.log("delete", err.message));
  };

  //fetch filter method
  const fetchfilter = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then((json) => console.log("qq", json));
  };

  //fetch patch method
  const fetchpatch = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      body: JSON.stringify({
        name: "Leanne Graham",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log("patch", json));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchpost();
  }, []);

  useEffect(() => {
    fetchput();
  }, []);
  useEffect(() => {
    fetchdelete();
  }, []);
  useEffect(() => {
    fetchfilter();
  }, []);
  useEffect(() => {
    fetchpatch();
  }, []);

  return (
    <div>
      {data.map((data) => {
        return (
          <React.Fragment key={data.id}>
            <h5>
              <p>{data.name}</p>
            </h5>
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <br />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Fetch;
