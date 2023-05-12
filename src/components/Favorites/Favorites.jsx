import { connect, useDispatch } from "react-redux"
import Card from "../Card/Card"
import { filterCards, orderCards } from "../../redux/actions/actions"
import { useState } from "react"
import style from './Favorites.module.css'

const Favorites = ({ myFavorites }) => {
    const [aux, setAux] = useState(false);
    const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div >
            <select onChange={handleOrder} >
                <option value='A'>Ascendente</option>
                <option value='D'>Descendente</option>
            </select>

            <select onChange={handleFilter} >
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Genderless'>Genderless</option>
                <option value='unknown'>unknown</option>
                <option value='AllCharacters'>All Characters</option>
            </select>
            <div className={style.container}>
                {
                    myFavorites?.map(({ id, name, status, species, gender, origin, image }) => {
                        return (

                            <Card
                                key={id}// es un identificador para react 
                                id={id}//es un identificador para el programador
                                name={name}
                                status={status}
                                species={species}
                                gender={gender}
                                origin={origin.name}
                                image={image}

                            />

                        )

                    })
                }
            </div>
        </div>
    )
}

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps, null)(Favorites)
