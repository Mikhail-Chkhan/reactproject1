export default interface IUser{
    id:number,
    name:string,
    username:string,
    email:string,
    phone:string
}

interface IUserHeaders {
    id:string,
    name:string,
    username:string,
    email:string,
    phone:string
}

export type {IUserHeaders}