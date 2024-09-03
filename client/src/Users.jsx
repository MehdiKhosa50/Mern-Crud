import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Users({ users, deleteUser }) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteUser(id);
  };

  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <div className="mb-3 d-flex justify-content-between">
          <Link to="/create" className="btn btn-success">Add+</Link>
        </div>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.Name}</td>
                  <td>{user.Email}</td>
                  <td>{user.Age}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => navigate(`/update/${user.id}`)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
