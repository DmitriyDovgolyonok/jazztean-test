import React from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import {route_names} from "../core/constants/routes"

export const Private = ({children}) => {
    const {isAuth} = useSelector((state) => state.login)

    return isAuth ? children: <Navigate to={"../" + route_names.LOGIN}/>

}
