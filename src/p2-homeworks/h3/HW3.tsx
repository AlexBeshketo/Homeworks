import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UsersType = Array<UserType>
export type UserType= {
    id: string ,
    name: string
}




// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UsersType>([]) // need to fix any

    const addUserCallback = (name:string) => {
        const user:UserType= {id: v1(), name: name}// need to fix any
        setUsers([  ...users, user]) // need to fix

    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
