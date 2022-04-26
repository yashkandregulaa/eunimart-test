import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import axios  from 'axios';

const User = ({id, email, first_name, last_name, avatar }) => {


  // const [user, setUser] = useState([]);
  let idd=window.location.pathname.split('/')[2];
  useEffect( () => {
      const getUsers = async () => {
        const res = await fetch(`https://reqres.in/api/users/${idd}`);
        console.log(res);
      }

      getUsers();
  }, []);


  return (
    <div style={{border: "1px solid black"}}>
      <a href="#">
        <img src={avatar} alt="" height={"100px"} width={"100px"} />
        <p>Mr. {first_name} {last_name}</p>
        <p>Email {email}</p>
      </a>
    </div>
  )
}

export default User;