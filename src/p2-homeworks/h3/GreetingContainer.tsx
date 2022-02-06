import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UsersType} from "./HW3";
// import Any = jasmine.Any;

type GreetingContainerPropsType = {
    users: UsersType // need to fix any
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback},) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<null| string>('') // need to fix any
    //
    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {

        setName((e.currentTarget.value)) // need to fix
    }
    const addUser = () => {
        if (name.trim() !== '') {
            addUserCallback(name)
            setName('')
            setError(null)
        }
        else {setError('Name is not defined')}
    };

    // const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    //     setError(null)
    //     if (e.charCode === 13) {
    //         addUser();
    //     }
    // }


    const totalUsers = users.length // need to fix

    return (
        <Greeting
            users={users}
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            // onKeyPressHandler={onKeyPressHandler}
        />
    )
}

export default GreetingContainer
