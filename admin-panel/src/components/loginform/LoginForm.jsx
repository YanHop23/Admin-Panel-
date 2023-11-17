import React from "react";
import k from './loginform.module.scss';
import LoginWindow from "./loginwindow/LoginWindow";

const LoginForm = () => {
    return(
        <div className={k.wrapper}>
            <LoginWindow />
        </div>
    );
};

export default LoginForm;