import style from './Detail.module.css'
import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
const Detail = () => {
    const [character, setCharacter] = useState({})
    const {id}=useParams()

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id])
    return (
        
        <div className={style.container}>
            <img src={character?.image} alt={character.name} />
            <div>
                <h2>{character?.name}</h2>
                <h2>{character?.status}</h2>
                <h2>{character?.gender}</h2>
                <h2>{character?.origin?.name}</h2>
                <h2>{character?.specie}</h2>
            </div>
        </div>
    )
}
export default Detail