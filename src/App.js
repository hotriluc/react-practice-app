import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([])

  const addToUserListHandler = (user) => {
    setUsersList( prev => [user, ...prev])
    console.log(usersList)
  }

  return (
    <div>
      <AddUser addUserHandler={addToUserListHandler}/>
      {usersList.length && <UsersList users={usersList} />}
    </div>
  );
}

export default App;
