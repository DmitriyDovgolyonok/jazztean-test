import {useCallback, useState} from "react"

export const useForm = (initialState) => {
    const [formValues, setFormValues] = useState(initialState)

    const handleChange = useCallback(({target}) => {
        const {value, name} = target

        setFormValues((state) => ({
            ...state,
            [name]: value,
        }))
    }, [])

    const handleReset = useCallback(() => {
        setFormValues(initialState)
    }, [])

    return {formValues, handleReset, handleChange}
}
