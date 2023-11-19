import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import k from './users.module.scss';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/users') 
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleDeleteUser = async (userId) => {
        // Виконайте HTTP DELETE-запит для видалення користувача з бази даних
        const response = await fetch(`http://localhost:3001/users/${userId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            // Видаліть користувача зі стану після успішного видалення
            setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
        } else {
            console.error('Failed to delete user');
        }
    };

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
                        <button onClick={() => handleDeleteUser(user.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
