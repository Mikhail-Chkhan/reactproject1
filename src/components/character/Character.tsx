// rsc + enter
import React, {FC} from 'react';
// import "./Character.module.css"
import styles from "./Character.module.css"
interface IProps {
    name:string,
    surname: string,
    age: number,
    info: string,
    photo:string
    index:string
}
const Character:FC<IProps> = ({name, surname, age, info, photo,index}) => {
    return (
        <div
            id={`id_${index}`}
            className={styles.card}>

                <h2>{`${name}  ${surname}`}</h2>
                <p>{age}</p>
                <div
                className={styles.description}>
                    <img className={styles.img} src={photo} alt={name}/>
                    <p>{info}</p>
                </div>
        </div>
    );
};

export default Character;