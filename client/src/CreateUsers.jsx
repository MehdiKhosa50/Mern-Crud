import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateUsers({ addUser }) {
  const [formData, setFormData] = useState({ Name: '', Email: '', Age: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData); // Add the user to the list
    navigate('/');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit}>
        <h2>Create User</h2>
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            className="form-control"
            id="Name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            className="form-control"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Age">Age</label>
          <input
            type="number"
            className="form-control"
            id="Age"
            name="Age"
            value={formData.Age}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Create User</button>
      </form>
    </div>
  );
}

export default CreateUsers;