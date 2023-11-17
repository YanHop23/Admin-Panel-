import React from "react";
import k from './loginwindow.module.scss';
const LoginWindow = () => {
    return(
        <div className={k.wrapper}>
            <p>Admin</p>
            <form action="submit">
                <input type="password" name="" id="" />
            </form>
            <button type="submit">Login</button>
        </div>
    );
};

export default LoginWindow;