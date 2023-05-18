import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";


function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) {
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav({ id, name, status, species, gender, origin, image })
      }
   }
   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });

   }, [myFavorites]);

   return (
      <div className={style.componente}>
         <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
         {onClose&&<button onClick={() => onClose(id)}>X</button>}
         <br />
         <Link to={`/detail/${id}`}>
            <h1 className={style.fire}>{name}</h1>
         </Link>
         <img src={image} alt="" />
         <h3>Status: {status}</h3>
         <h3>Species: {species}</h3>
         <h3>Gender: {gender}</h3>
         <h3>Origin: {origin}</h3>

      </div>
   );
}
export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}

export function mapDispatchToProps(dispatch) {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
