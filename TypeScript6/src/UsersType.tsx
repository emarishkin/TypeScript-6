
export interface IUser{
    id: number,
    email: string,
    username: string,
    password: any,
    name: IName
    phone:number
}


interface IName{
    firstname:string
    lastname:string
}