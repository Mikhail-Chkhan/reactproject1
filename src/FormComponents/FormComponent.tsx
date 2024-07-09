import React from 'react';
import styles from './FormComponent.module.css'
import {useForm} from "react-hook-form";
import IForm from "../modules/IForm";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/formValidator";
import {addPost} from "../servises/post.api.servoses";


const FormComponent = () => {
    let {
        formState: {
            errors,
            isValid
        },
        register,
        handleSubmit,
        reset
    } =
        useForm<IForm>(
            {
                mode: "all",
                resolver: joiResolver(postValidator)
            });

    let createPost = (data: IForm) => {
        console.log(data)
        addPost(data).then(response => {
            const status: number = response.status;
            console.log(response)
            console.log(status)
            if (status === 201) {
                alert("Post created successfully")
                reset()


            }
        })
    };

    return (
        <div className={styles.divForm}>
            <form onSubmit={handleSubmit(createPost)}>
                {<h2>Create new post</h2>}
                {<input type="text" placeholder='title, enter text from 3 to 255 characters' {...register('title')}/>}
                {errors.title && <p className={styles.errors}>{errors.title?.message}</p>}
                {<input type="text" placeholder='body, enter text from 5 to 100 characters' {...register('body')}/>}
                {errors.body && <p className={styles.errors}>{errors.body?.message}</p>}
                {<input type="number"
                        placeholder='UserId, enter number from 1 to 100 characters' {...register('UserId')}/>}
                {errors.UserId && <p className={styles.errors}>{errors.UserId?.message}</p>}
                {<button disabled={!isValid}>Create</button>}
            </form>

        </div>
    );
};

export default FormComponent;