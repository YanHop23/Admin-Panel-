import React from "react";
import Users from "../users/Users";
import k from "./userswindow.module.scss";
import { Link } from "react-router-dom";

const UsersWindow = () => {
    return (
        <div className={k.wrapper}> 
            <div className={k.list}>
                <p className={k.item}>ID</p>
                <p className={k.item}>Name</p>
                <p className={k.item}>Password</p>
                <p className={k.item}>Email</p>
                <p className={k.item}>Profile</p>
                <p className={k.item}>Destroy</p>
            </div>
            <Users />
            <Link to="/users/add">Add new user</Link>
        </div>
    );
};

export default UsersWindow;