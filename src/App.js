import logo from './logo.svg';
import './App.css';



import React, { useEffect, useState } from "react"

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <header>
        <h1>FBI's Most Wanted List</h1>
      </header>
      {loading && <div className="loading-spinner"></div>}
      {!loading && users.length > 0 && (
        <div className="card-container">
          {users.map(user => (
            <div className="card" key={user.id}>
              <div className="card-content">
                <h3 className="card-title">{user.name}</h3>
                <p className="card-description">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;