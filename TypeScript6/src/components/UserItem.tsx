import { FC } from "react";
import { IUser } from "../UsersType";

interface UserItemProps{
    user:IUser
}

const UserItem:FC<UserItemProps> = ({user}) => {
    return(
        <div style={{border:'2px solid black'}}>
           <h1>{user.id}. {user.username}</h1>
           <p>Логин: {user.email}</p>
           <input type={"password"} value={user.password} />
           <div>
            <h4>Персональные данные пользователя:</h4>
            <p>ФИО: {user.name.firstname } {user.name.lastname}</p>
            <p>Номер телефона: {user.phone}</p>
           </div>
        </div>
    )
}

export default UserItem