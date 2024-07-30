import React from 'react';
import {IAuth} from "../../models/IAuth";
import {useForm} from "react-hook-form";
import {sing_up} from "../../service/user.api.servise";
import styles from "./RegistrationFormComponent.module.css"

const RegistrationFormComponent = () => {
    let {
        handleSubmit,
        register
    } = useForm<any>({
        defaultValues: {
            username: 'astedor',
            password: 'Limpid-11',
        }
    })

    let auth = (data:IAuth) => {
        sing_up(data).then(response => {
            if (response.status === 200){console.log(response)}
        })
    }

    return (
        <div className={styles.regDivBox}>
            <form className={styles.regDivForm} onSubmit={handleSubmit(auth)}>
                <h2>Registration</h2>
                <input type={"text"} placeholder={"username"} {...register("username")}/>
                <input type={"text"} placeholder={"password"} {...register("password")}/>
                <button>sing up</button>
            </form>
        </div>
    );
};

export default RegistrationFormComponent;