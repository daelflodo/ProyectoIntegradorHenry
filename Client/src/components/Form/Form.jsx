import { useState } from "react"
import style from "./Form.module.css"
import validation from "../Validation/Validation"
import { Link } from "react-router-dom"
const Form = ({ login }) => {
    const [userData, setUseData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    const handleChange = (event) => {
        setUseData({
            ...userData,
            [event.target.name]: event.target.value 
            //propiedad 
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }
    return (
        <div className={style.container}>
            <h1>Bienvenido</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">EMAIL</label>
                <input 
                    name="email" 
                    type="email" 
                    placeholder="Ingrese su email" 
                    value={userData.email} 
                    onChange={handleChange} 
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                <label htmlFor="pasword">PASSWORD</label>
                <input name="password" type="password" value={userData.password} onChange={handleChange} />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                <button disabled={!userData.email || !userData.password || errors.email || errors.password}  >Sign in</button>

            </form>
            <Link to='/signup'>
                   Sign Up
                </Link>
        </div>
    )
}
export default Form