import SearchBar from "../SearchBar/SearchBar"
import { Link, useNavigate } from "react-router-dom"
import style from './Nav.module.css'
const Nav = ({ onSearch, setAccess }) => {//recibe como propiedad la funcion onSearch

    const navigate = useNavigate()
    const handlelog = () => {
        setAccess(false)
        navigate('/')
    }

    return (
        <div className={style.container}>
            <nav >
                <SearchBar className={style.search} onSearch={onSearch} />
                <br />
                <Link to='/about' >
                    <button>About</button>
                </Link>

                <Link to='/home'>
                    <button>Home</button>
                </Link>

                <button onClick={handlelog}>Log Out</button>

                <Link to='/favorites'>
                    <button>Favorites</button>
                </Link>
            </nav>
        </div>
    )
}
export default Nav