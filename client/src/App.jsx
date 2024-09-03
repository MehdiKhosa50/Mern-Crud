import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Users from './Users';
import CreateUsers from './CreateUsers';
import UpdateUsers from './UpdateUsers';

function App() {
  const [users, setUsers] = useState([
    { id: 1, Name: "MehdiKhosa", Email: "mehdi@gmail.com", Age: 20 }
  ]);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users users={users} deleteUser={deleteUser} />} />
          <Route path="create/" element={<CreateUsers addUser={addUser} />} />
          <Route path="update/:id" element={<UpdateUsers users={users} updateUser={updateUser} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;