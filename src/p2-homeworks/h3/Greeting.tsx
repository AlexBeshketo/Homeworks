import React, {ChangeEvent} from 'react'
import {UsersType} from "./HW3";
import s from './Greeting.module.css'

export type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
    users: UsersType
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, users} // деструктуризация пропсов
) => {
    const inputClass = error ? <span className={s['error-text']}>{error}</span> : '';

    const addData =
        users.map(p => {
                return <div>
                    <span> Name :</span>
                    <span className={s.usersName}>{p.name}</span>
                    <span className={s.id}> ID :{p.id.substr(0,5)}</span>
                </div>
            }
        )

    return (

            <div>
                <input value={name} onChange={setNameCallback} className={error ? s['error-class'] : s['input']}/>
                <button className={s.btn} onClick={addUser}>Add</button>

                <span className={s.usersnumber}>Users :{totalUsers}</span>

                <div>{inputClass}</div>

                <div>{addData}</div>

            </div>
            )
            }

            export default Greeting



