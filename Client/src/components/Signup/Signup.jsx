import style from '../Signup/Signup.module.css'
import { useState } from "react"
import validation from '../Validation/Validation'
const Signup = ({signup}) => {
    const [userData, setUseData] = useState({
        user:'',
        email: '',
        password: ''
    })
     const [errors, setErrors] = useState({})
     const handleChange = (event) => {
        setUseData({
            ...userData,
            [event.target.name]: event.target.value 
        })  
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        // signup(userData)
    }
    return (
        <div className={style.container}>
            <h1>Ingrese sus datos para registrase</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user">Nombre de usuario</label>
                <input 
                    name='user' 
                    placeholder='Name' 
                    value={userData.user} 
                    onChange={handleChange}
                />
                {errors.user && <p style={{ color: "red" }}>{errors.user}</p>}

                <label htmlFor="email">Ingresu su email</label>
                <input 
                    type='email' 
                    name='email' 
                    placeholder='Email'
                    value={userData.email}
                    onChange={handleChange} 
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

                <label htmlFor="pasword">Ingrese su password</label>
                <input 
                    type='password' 
                    name='password' 
                    placeholder='Contraseña' 
                    value={userData.password} 
                    onChange={handleChange}
                />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                <button>Send</button>
            </form>
        </div>
    )
}
export default Signup;