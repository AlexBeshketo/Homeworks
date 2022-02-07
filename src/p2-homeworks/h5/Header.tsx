import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import p from './Header.module.css'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_plus: '/juniorplus',

    // add paths
}


function Header() {
    // let [isTrue, setIsTrue]=useState<boolean>(true)


    return (

        <div className={p.main}>


            <div className={p.block}>

                <NavLink to={PATH.PRE_JUNIOR}   className= {props => props.isActive? p.active : p.link}>PreJunior </NavLink>
                <NavLink to={PATH.JUNIOR} className={props => props.isActive ?  p.active : p.link}>Junior</NavLink>
                <NavLink to={PATH.JUNIOR_plus} className={props => props.isActive ?  p.active : p.link}>Junior+  </NavLink>

                    <div  className={p.box}/>
            </div>

        </div>

    )
}

export default Header
