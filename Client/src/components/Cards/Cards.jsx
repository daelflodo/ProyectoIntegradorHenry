import Card from "../Card/Card";
import style from "./Cards.module.css"

export default function Cards({characters,onClose}) {
   return (
      <div className={style.componente}>
        {
         characters.map(({id,name, status, species, gender, origin,image,}) => {  
         return( 
            <Card 
               key={id}// es un identificador para react 
               id={id}//es un identificador para el programador
               name={name} 
               status={status} 
               species={species}
               gender ={gender}
               origin={origin.name}
               image={image}
               onClose={onClose}
           />
         )
      })}
   </div>
   );
}
