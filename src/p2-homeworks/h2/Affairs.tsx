import React, {useState} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import p from './Affairs.module.css'

export type AffairsPropsType = { // need to fix any
    data: any
    setFilter: (filter:FilterType) => void
    deleteAffairCallback: (arg0: number) => void
}


function Affairs(props: AffairsPropsType) {
    const {setFilter} = props;

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            priority={a.priority}
            name={a.name}// should work
            key={a.id}            // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}

        />
    ))

    const setAll = () => {
        setFilter('all')
    } // need to fix
    const setHigh = () => {
setFilter('high')
    }
    const setMiddle = () => {
        setFilter('middle')
    }
    const setLow = () => {
        setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}

            <button className={p.btn} onClick={setAll}> All </button>
            <button className={p.btn} onClick={setHigh}> High </button>
            <button className={p.btn} onClick={setMiddle}> Middle </button>
            <button className={p.btn} onClick={setLow}> Low </button>
        </div>
    )
}

export default Affairs
