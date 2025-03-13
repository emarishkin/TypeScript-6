import { FC, useEffect, useState } from "react";
import { IUser } from "../UsersType";
import axios from "axios";
import UserItem from "./UserItem";

interface UserListProps{
    users:IUser[]
}

const UserList:FC<UserListProps> = ({users}) => {


const [user,setUser] = useState<IUser[]>([])

useEffect(()=>{
    FetchUsers()
},[])


async function FetchUsers(){
    try{
        const response = await axios.get<IUser[]>('https://fakerapi.it/api/v2/users?_quantity=1&_gender=male')
        setUser(response.data)
    }catch(e){
      alert(e)
    }
}
    return (
        <div>
            <h1>Пользователи</h1>
            <button>Посмотреть пароли</button>
          {users.map((user)=>
          <UserItem user={user} key={user.id} />
          )}
        </div>
    )
}

export default UserList