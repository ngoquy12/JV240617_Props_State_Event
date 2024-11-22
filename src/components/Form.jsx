import React, { useState } from "react";

export default function Form() {
  //   const [userName, setUserName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // const value = e.target.value;
    // const name = e.target.name;

    const { value, name } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const newUserName = {
    //     id: 1,
    //     name: user.userName
    // }

    console.log("User: ", user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="userName"
          //   onChange={(event) => setUserName(event.target.value)}
          onChange={handleChange}
          type="text"
          placeholder="User name"
        />
        <input
          name="email"
          //   onChange={(event) => setEmail(event.target.value)}
          onChange={handleChange}
          type="text"
          placeholder="Email"
        />
        <input
          name="password"
          //   onChange={(event) => setPassword(event.target.value)}
          onChange={handleChange}
          type="text"
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
