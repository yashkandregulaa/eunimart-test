import './App.css';
import Users from './components/Users';
import AllDetails from './components/AllDetails';
import User from './components/User';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await fetch('https://reqres.in/api/users');
      // console.log(data);
      const parsedData = await data.json();
      setData(parsedData.data);
      
    }

    fetchUserData();
  }, []);


  let id=window.location.pathname.split('/')[2];

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/users' element={<Users userData={data} />}>Users</Route>
          <Route path={`/users/${id}`} element={<User />} >User</Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
