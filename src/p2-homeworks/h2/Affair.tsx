import React from 'react'
import {AffairType} from "./HW2";
import p from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair:  {
        id:number
        name:string
        priority: string
    }
    name:string
    priority: string
      // need to fix any
    deleteAffairCallback: (a:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair.id)
    }// need to fix

    return (
        <>
            <div className={p.padding}>
        <div className={p.main}>
           <span>  {props.name} </span>
            <span className={p.priority}>{props.priority}</span>

            <button  className={p.btn2} onClick={deleteCallback}>X</button>
        </div>
            </div>
        </>

    )
}

export default Affair
