// UserForm.jsx
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const UserForm = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Отримайте дані користувача за його id
        fetch(`http://localhost:3001/users/${id}`)
        .then(response => response.json())
        .then(data => setUserData(data))
        .catch(error => console.error('Error fetching user data:', error));
    }, [id]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>User Profile</h2>
            <div>ID: {userData.id}</div>
            <div>Name: {userData.name}</div>
            <div>Password: {userData.password}</div>
            <div>Email: {userData.email}</div>
            <NavLink to={`/users/${userData.id}/edit`}>Edit</NavLink>
        </div>

    );
};

export default UserForm;
