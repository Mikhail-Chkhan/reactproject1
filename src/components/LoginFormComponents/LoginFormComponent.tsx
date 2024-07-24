import React from 'react';
import {useForm} from "react-hook-form";
import {sing_in} from "../../service/user.api.servise";
import {IAuth} from "../../models/IAuth";

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

    let auth = (data:IAuth) => {
        sing_in(data).then(response => {
            if (response.status === 200){console.log(response)}
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit(auth)}>
                <input type={"text"} placeholder={"username"} {...register("username")}/>
                <input type={"text"} placeholder={"password"} {...register("password")}/>
                <button>sing in</button>
            </form>
        </div>
    );
};

export default LoginFormComponent;