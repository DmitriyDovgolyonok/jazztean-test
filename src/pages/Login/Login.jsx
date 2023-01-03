import React, {useEffect} from "react"
import {LoginForm} from "../../components/LoginForm/LoginForm"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {route_names} from "../../core/constants/routes"
import {useForm} from "../../core/customhook/useForm"
import {LOGIN_SUCCESS} from "../../core/redux/actions/loginAction"

export const Login = () => {
    const dispatch = useDispatch()

    const { isAuth } = useSelector((state) => state.login)
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuth) {
            navigate(route_names.PROFILE);
        }
    }, [isAuth])

    const { formValues, handleChange } = useForm({
        username: "",
        password: "",
    })

    const onSubmit = (e) => {
        e.preventDefault()
        if (formValues.username === "Admin" && formValues.password === "12345678") {
            dispatch(LOGIN_SUCCESS(formValues))
        } else {
            alert("Username or the password was entered incorrectly")
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm
                formValues={formValues}
                handleChange={handleChange}
                onSubmit={onSubmit}
            />
        </div>
    )
}
