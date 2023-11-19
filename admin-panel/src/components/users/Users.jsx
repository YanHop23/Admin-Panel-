// Users.jsx
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import k from './users.module.scss';

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
        <div className={k.wrapper}>
            <ul className={k.list}>
                {users.map(user => (
                    <li key={user.id}>
                        <div>{user.id}</div>
                        <div>{user.name}</div>
                        <div>{user.password}</div>
                        <div>{user.email}</div>
                        <Link to={`/users/${user.id}`}>View Profile</Link>
                        <button>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
