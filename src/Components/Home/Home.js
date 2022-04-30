import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const deleteUser = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/user/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  return (
    <div>
      <h1>Available Users = {users.length}</h1>

      {users.map((user) => (
        <div key={user._id}>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
          <button onClick={() => deleteUser(user._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
