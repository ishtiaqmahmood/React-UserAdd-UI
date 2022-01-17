import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [usersList, setusersList] = useState([]);
  
  const AddUserHandler = (uName, uAge) => {
    setusersList((prevUsersList) => {
      return[...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
    })
  }

  return (
    <React.Fragment>
      <AddUser onAddUser={AddUserHandler}/>
      <UserList users={usersList} />
    </React.Fragment>
  );
}

export default App;
