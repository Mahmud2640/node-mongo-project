import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
   const {id} = useParams();
   const [user, setUser] = useState({});
   useEffect(() => {
      fetch(`http://localhost:5000/user/${id}`)
         .then((res) => res.json())
         .then((data) => setUser(data));
   }, []);
   return (
      <div>
         <h1>Updating users... {user.name}</h1>
      </div>
   );
};

export default UpdateUser;