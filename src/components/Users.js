import React from 'react'
import User from './User';
import { Link } from 'react-router-dom';

const Users = ({ userData }) => {
  return (
    

      <div>
        {
          userData.map((data) => 
          
            <p>
              <Link className='link-container' onClick={<User id={data.id} email={data.email} first_name={data.first_name} last_name={data.last_name} avatar={data.avatar} />} to={`/users/${data.id}`}>{data.id} .  {data.first_name} {data.last_name}</Link>
            </p>
            // {/* // <User email={data.email} first_name={data.first_name} last_name={data.last_name} avatar={data.avatar} /> */}
          
          )
        }
      </div>
    
  )
}

export default Users;