import React from "react"
import {Link} from "react-router-dom"
import styles from "./Navigation.module.css"
import {useSelector} from "react-redux"

export const Navigation = () => {
    const {isAuth, userData} = useSelector((state) => state.login)
    return (
        <div className={styles.navigation}>
            <div className={styles.navigation__left}>
                <Link to="/">Home</Link>
                <Link to="/calendar">Calendar</Link>
                <Link to="/info">Info</Link>
            </div>

            <div className={styles.navigation__right}>
                {isAuth ? userData.username : <Link to="/login">Login</Link>}
                <Link to="/profile">Profile</Link>
            </div>

        </div>
    )
}
