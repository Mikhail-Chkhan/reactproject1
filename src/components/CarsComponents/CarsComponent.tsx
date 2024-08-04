import React, {useEffect, useState} from 'react';
import CarComponent from "../CarComponents/CarComponent";
import {getCars} from "../../service/cars.api.service";
import {ICar} from "../../models/ICar";
import {refresh} from "../../service/user.api.servise";
import {useNavigate, useSearchParams} from "react-router-dom";
import PaginationComponent from "../PaginationComponents/PaginationComponent";
import {CarsResponse} from "../../models/CarsResponse";

const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [carsResponse, setCarsResponse] = useState<CarsResponse>({
        items: [],
        next: null,
        prev: null,
        total_items: 0,
        total_pages: 0
    })
    let navigation = useNavigate()
    let [query] = useSearchParams()

    let getItemCar = async () => {
        try {
            await getCars(query.get('page') || '1').then(response => {
                let dataResponse= response.data
                setCarsResponse(dataResponse)
                setCars(response.data.items)
            })
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


    }, [query]);

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
            <PaginationComponent
                next={carsResponse?.next}
                prev={carsResponse?.prev}
                total_pages={carsResponse?.total_pages}
            />
        </div>
    );
};

export default CarsComponent;