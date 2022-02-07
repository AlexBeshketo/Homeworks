import React from 'react'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";

import Junior from "./pages/Junior";
import Juniorplus from "./pages/Juniorplus";
import {Route, Routes} from "react-router-dom";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_plus: '/juniorplus',

    // add paths
}

function Routes1() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/'}  element={<PreJunior/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_plus} element={<Juniorplus/>}/>


                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Routes1
