import React from 'react';
import {useForm} from "react-hook-form";
import {createCar} from "../../service/cars.api.service";
import {ICarCreate} from "../../models/ICarCreate";
import {useNavigate} from "react-router-dom";
import {refresh} from "../../service/user.api.servise";

const CarsCreateComponent = () => {
let navigate = useNavigate()
    let {
        formState: {
            // errors,
            isValid
        },
        register,
        handleSubmit,
        // reset
    } =
        useForm<ICarCreate>(
            {
                mode: "all",
                // resolver: joiResolver(postValidator)
            });


    let createNewCar = async (data: ICarCreate) => {
        try {
            await createCar(data);
            console.log('OK');
            navigate('/cars');
        } catch (e) {
            console.log('error', e);
                try {
                    await refresh();
                    await createCar(data);
                    navigate('/cars');
                }catch (er) {
                    navigate('/login');
                    localStorage.clear();
                }
            }
        }

    return (
        <div>
            <form onSubmit={handleSubmit(createNewCar)}>
                <input type={"text"} placeholder={"brand"} {...register('brand')}/>
                <input type={"number"} placeholder={"year"} {...register('year')}/>
                <input type={"number"} placeholder={"price"} {...register('price')}/>
                <button disabled={!isValid}>Create car</button>

            </form>
        </div>
    );
};

export default CarsCreateComponent;