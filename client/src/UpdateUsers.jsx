import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpdateUsers({ users, updateUser }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ Name: '', Email: '', Age: '' });

  useEffect(() => {
    const userToEdit = users.find(user => user.id === parseInt(id));
    if (userToEdit) {
      setFormData(userToEdit);
    }
  }, [id, users]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    navigate('/');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit}>
        <h2>Update User</h2>
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
        <button type="submit" className="btn btn-primary mt-3">Update User</button>
      </form>
    </div>
  );
}

export default UpdateUsers;