import { FC, useState } from "react";
import { IUser } from "../UsersType";

interface UserListProps{
    users:IUser[]
}

const UserList:FC<UserListProps> = ({users}) => {

const [glaz,setGlaz] = useState<string>("password")


    return (
        <div>
            <h1>Пользователи</h1>
            <button onClick={()=>setGlaz('text')}>Посмотреть пароли</button>
          {users.map((user)=>
          <div style={{border:'2px solid black'}}>
           <h1>{user.id}. {user.username}</h1>
           <p>Логин: {user.email}</p>
           <input type={glaz} value={user.password} />
           <div>
            <h4>Персональные данные пользователя:</h4>
            <p>ФИО: {user.name.firstname } {user.name.lastname}</p>
            <p>Номер телефона: {user.phone}</p>
           </div>
          </div>
          )}
        </div>
    )
}

export default UserList