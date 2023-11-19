import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addUser } from './../../redux/actions'; 
import { useNavigate } from 'react-router-dom'; // Замініть useHistory на useNavigate

const AddUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Замініть useHistory на useNavigate
    const [user, setUser] = useState({ id: '', name: '', password: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user.name.trim() || !user.password.trim() || !user.email.trim()) {
            return;
        }

        const response = await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            const newUser = await response.json();
            dispatch(addUser(newUser));
            setUser({ id: '', name: '', password: '', email: '' });

            // Змініть URL на "/users" після успішного додавання користувача
            navigate('/users'); // Замініть history.push на navigate
        } else {
            console.error('Failed to add user');
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    ID:
                    <input type="text" name="id" value={user.id} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Name:
                    <input type="text" name="name" value={user.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" value={user.password} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={user.email} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;
