import {Route, Routes} from "react-router-dom"
import {route_names} from "../core/constants/routes"
import {Home} from "../pages/Home/Home"
import {Login} from "../pages/Login/Login"
import {Private} from "./Private";
import {Profile} from "../pages/Profile/Profile";
import {Info} from "../pages/Info/Info";
import {Calendar} from "../pages/Calendar/Calendar";

export const Router = () => {
    return (
        <Routes>
            <Route path={route_names.HOME} element={<Home/>}/>
            <Route path={route_names.LOGIN} element={<Login/>}/>

            <Route
                path={route_names.PROFILE}
                element={
                    <Private>
                        <Profile/>
                    </Private>
                }/>

            <Route
                path={route_names.INFO}
                element={
                    <Private>
                        <Info/>
                    </Private>
                }
            />

            <Route
                path={route_names.CALENDAR}
                element={
                    <Private>
                        <Calendar/>
                    </Private>
                }
            />

        </Routes>
    )
}
