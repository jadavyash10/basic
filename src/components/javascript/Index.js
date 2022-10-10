import React from "react";

const Index = () => {
  //Array
  const array = ["a", "b", "c", "d", "e"];
  console.log(array.toString());
  console.log(array.join("*"));

  const arr1 = array.slice(2);
  console.log(arr1);
  const arr2 = array.slice(1, 4);
  console.log(arr2);

  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(fruits);
  fruits.splice(2, 0, "Lemon", "Kiwi");
  console.log(fruits);

  const points = [40, 20, 100, 1, 5, 25, 10];

  let txt = "";
  points.forEach((value) => {
    return (txt += value);
  });
  console.log("txt", txt);

  const aa = points.map((i) => {
    return i * i;
  });
  console.log(aa);

  let age = points.filter((value) => value > 18);
  console.log("age", age);

  let sum = points.reduce((p, c) => p + c);
  console.log("sum", sum);

  let allOver18 = points.every((v) => v > 18);
  console.log("allOver18", allOver18);

  let anyover18 = points.some((v) => v > 18);
  console.log("anyover18", anyover18);

  //Object

  const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
  };
  person.name = function () {
    return (this.firstName + " " + this.lastName).toUpperCase(); // undefined
  };
  console.log(person.name());

  let arr = Object.values(person);
  console.log(arr);
  let json = JSON.stringify(person);
  console.log(json);
  let p = JSON.parse(json);
  console.log(p);

  let str = "";
  for (let x in arr) {
    str += arr[x];
  }
  console.log(str);

  const user = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    set ls(value) {
      return (this.lastName = value);
    },
    get lang() {
      return this.language;
    },
  };
  user.lastName = "John";
  console.log(user.lastName);

  const obj = { counter: 0 };
  Object.defineProperty(obj, "reset", {
    get: function () {
      this.counter = 0;
    },
  });
  Object.defineProperty(obj, "increment", {
    get: function () {
      this.counter++;
    },
  });
  Object.defineProperty(obj, "decrement", {
    get: function () {
      this.counter--;
    },
  });
  Object.defineProperty(obj, "add", {
    set: function (value) {
      this.counter += value;
    },
  });
  Object.defineProperty(obj, "subtract", {
    set: function (value) {
      this.counter -= value;
    },
  });

  console.log((obj.add = 5));
  console.log(obj.reset);
  console.log(obj);

  function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }

  Person.prototype.nationality = "English";
  Person.prototype.name = function () {
    return this.firstName + " " + this.lastName;
  };
  let app = new Person("a", "b", 21, "as");
  console.log(app.name());

  console.log(Object.keys(person));
  console.log(Object.values(person));
  console.log(Object.entries(person));

  let users = {};
  console.log("first", users?.address?.street);

  let userAdmin = {
    admin() {
      console.log("I am admin");
    },
  };

  //optional chainning
  let userGuest = {};

  // userAdmin.admin();

  userAdmin.admin?.();

  userGuest.admin?.();

  //destructuring
  const [one, , , two] = points;
  console.log("array desturing", one, two);

  const { firstName } = person;
  console.log("obj desturing", firstName);

  function getUser(userId) {
    return new Promise((resolve, reject) => {
      console.log("Get user from the database.");
      setTimeout(() => {
        resolve({
          userId: userId,
          username: "john",
        });
      }, 1000);
    });
  }

  function getServices(user) {
    return new Promise((resolve, reject) => {
      console.log(`Get services of  ${user.username} from the API.`);
      setTimeout(() => {
        resolve(["Email", "VPN", "CDN"]);
      }, 2 * 1000);
    });
  }

  function getServiceCost(services) {
    return new Promise((resolve, reject) => {
      console.log(`Calculate service costs of ${services}.`);
      setTimeout(() => {
        resolve(services.length * 100);
      }, 3 * 1000);
    });
  }

  getUser(100).then(getServices).then(getServiceCost).then(console.log);

  const tom = () => console.log("Tom");
  const jerry = () => console.log("Jerry");
  const doggy = () => console.log("Doggy");
  const cartoon = () => {
    console.log("Cartoon");
    setTimeout(tom, 0);
    setTimeout(doggy, 0);
    new Promise((resolve, reject) => {
      resolve("I am a Promise, right after tom and doggy! Really?");
    }).then((resolve) => {
      console.log(resolve);
      setTimeout(() => {
        console.log("inner timeout");
      }, 0);
    });
    new Promise((resolve, reject) =>
      resolve("I am a Promise after Promise!")
    ).then((resolve) => console.log(resolve));
    jerry();
  };
  cartoon();

  function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("resolved");
      }, 2000);
    });
  }

  async function asyncCall() {
    console.log("calling");
    const result = await resolveAfter2Seconds();
    console.log(result);
  }

  asyncCall();

  const demo = (a, ...rest) => {
    console.log("rest", rest);
  };
  demo(2, 3, 4, 22, 43, 19, 23);

  const a = [1, 2, 3, 4];
  const b = [11, 12, 13];
  const c = [...a, ...b];
  console.log("c", c);

  const asdf = {
    name: "adsf",
    email: "adsf@gmail.com",
  };

  const dsaa = {
    phone_no: 12332111,
  };

  const wert = { ...asdf, ...dsaa };
  let name = "tagline";
  console.log("spred", ...name);
  console.log("wert", wert);

  const timeout = () => {
    setTimeout(() => {
      console.log("settimeout");
    }, 1000);
  };
  const interval = () => {
    setInterval(() => {
      console.log("setinterval");
    }, 1000);
  };
  timeout();
  interval();
  return <div></div>;
};

export default Index;
