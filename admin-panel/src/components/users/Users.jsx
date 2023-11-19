// Users.jsx
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Users = () => {
    // Приклад даних про користувачів (використовуйте свої дані або отримайте їх з сервера)
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/users') 
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
