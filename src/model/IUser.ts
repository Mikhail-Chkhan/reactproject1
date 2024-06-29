import React from "react";

export default interface IUser{
    id:number,
    firstName:string,
    lastName:string,
    maidenName:string,
    children?:React.ReactNode
    point:(id:number)=>void
}

export  interface IUsers {
    users:IUser[]

}