import React from "react";
import "./AddUser.css";

const AddUser = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };

    // send data server
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
      alert("User added successfully");
      e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleAddUser}>
        <h3>Add User</h3>
        <label for="name">name</label>
        <input type="text" placeholder="Enter Username" id="name" required />
        <label for="email">Email</label>
        <input type="email" placeholder="Enter Email" id="email" required />

        <div class="btn from-top">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddUser;
