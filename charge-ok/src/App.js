import React, { useEffect, useState } from "react";
import GoogleMap from "./GoogleMap";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API

    fetch("http://localhost:5000/api/users")
      .then((response) => {
        console.log("Response:", response); // Log the response object
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data); // Log the fetched data
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>
      <ul>
        {users.length > 0 ? (
          users.map((user) => <li key={user.id}>{user.name}</li>)
        ) : (
          <li>No users found</li>
        )}
      </ul>

      <div>test</div>

      <GoogleMap />
    </div>
  );
}

export default App;