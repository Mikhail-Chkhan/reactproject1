import React from "react";
export default interface IPost {
    id:number,
    title:string,
    body:string
    tags: [string]
};

export interface IPosts {
    posts:IPost[]
}