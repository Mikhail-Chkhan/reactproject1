import React, {useEffect, useState} from 'react';
import CarComponent from "../CarComponents/CarComponent";
import {getCars} from "../../service/cars.api.service";
import {ICar} from "../../models/ICar";
import {refresh} from "../../service/user.api.servise";
import {useNavigate} from "react-router-dom";

const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    let navigation = useNavigate()

    let getItemCar = async () => {
        try {
            await getCars().then(response => setCars(response.data.items))
        }
        catch (e){
            try {
                await refresh()
                await getCars().then(response => setCars(response.data.items))
            }catch (er) {
                navigation('/login')
                localStorage.clear()
            }
        }
    }

    useEffect(() => {
        getItemCar()
        // getCars().then(response => {
        //     let carsResponse: ICar[] = response.data.items
        //     setCars(carsResponse)
        // })

    }, []);

    return (
        <div>
            {cars.map((car) => (
                <CarComponent
                    key={car.id}
                    id={car.id}
                    brand={car.brand}
                    price={car.price}
                    year={car.year}
                />
            ))}
        </div>
    );
};

export default CarsComponent;