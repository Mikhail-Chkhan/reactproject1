import React from 'react';
import {useForm} from "react-hook-form";
import {sing_in} from "../../service/user.api.servise";
import {IAuth} from "../../models/IAuth";
import styles from "./LoginFormComponent.module.css"
import {useNavigate} from "react-router-dom";

const LoginFormComponent = () => {
    let {
        handleSubmit,
        register
    } = useForm<any>({
        defaultValues: {
            username: 'astedor',
            password: 'Limpid-11',
        }
    })


        const navigate = useNavigate();
    const auth = (data: IAuth) => {
        sing_in(data).then(response => {
            if (response.status === 200) {
                navigate("/cars");
            }
        }).catch(error => {
            console.error('Error during sign-in:', error);
        });
    };


    return (
        <div className={styles.loginDivBox}>
            <form className={styles.loginDivForm} onSubmit={handleSubmit(auth)}>
                <h2>Authorization</h2>
                <input type={"text"} placeholder={"username"} {...register("username")}/>
                <input type={"text"} placeholder={"password"} {...register("password")}/>
                <button>sing in</button>
            </form>
        </div>
    );
};

export default LoginFormComponent;