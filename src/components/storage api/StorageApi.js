import React from "react";

const StorageApi = () => {
  const arr = ["react js", "angular", "node js"];
  const arr2 = [1, 2, 3, "asdf"];
  const dep = {
    mobile_app: "flutter",
    webapp: "react js",
    backend: "node js",
    database: "mongodb",
  };

  localStorage.setItem("Name", "Tagline");
  localStorage.setItem("lastname", "infotech");
  localStorage.setItem("technologies", JSON.stringify(arr));
  localStorage.setItem("department", JSON.stringify(dep));
  localStorage.setItem("xyz", "asdfasdf");
  localStorage.setItem("arr", JSON.stringify(arr2));

  localStorage.removeItem("xyz");
  localStorage.removeItem("arr");

  //   localStorage.clear();

  let name = localStorage.getItem("Name");
  let lname = localStorage.getItem("lastname");
  let tech = localStorage.getItem("technologies");
  let department = localStorage.getItem("department");
  let techn = JSON.parse(localStorage.getItem("technologies"));
  console.log(typeof techn);
  console.log(techn);

  //StorageApi

  sessionStorage.setItem("Name", "Tagline");
  sessionStorage.setItem("lastname", "infotech");
  sessionStorage.setItem("technologies", JSON.stringify(arr));
  sessionStorage.setItem("department", JSON.stringify(dep));
  sessionStorage.setItem("xyz", "asdfasdf");
  sessionStorage.setItem("arr", JSON.stringify(arr2));

  sessionStorage.removeItem("xyz");
  sessionStorage.removeItem("arr");

  //  sessionStorage.clear();

  let sname = sessionStorage.getItem("Name");
  let slname = sessionStorage.getItem("lastname");
  let stech = sessionStorage.getItem("technologies");
  let sdepartment = sessionStorage.getItem("department");
  let stechn = JSON.parse(sessionStorage.getItem("technologies"));

  return (
    <div>
      <div>
        <h4>Local storage</h4>
        <p>{name}</p>
        <p>{lname}</p>
        <p>{tech}</p>
        <p>{department}</p>
      </div>
      <div>
        <h4>Session storage</h4>
        <p>{sname}</p>
        <p>{slname}</p>
        <p>{stech}</p>
        <p>{sdepartment}</p>
      </div>
    </div>
  );
};

export default StorageApi;
