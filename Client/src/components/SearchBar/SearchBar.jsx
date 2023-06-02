import style from "./SearchBar.module.css"
import { useState } from 'react';
const SearchBar = ({ onSearch }) => {
   let [id, setId] = useState("")
   const handleChange = (event) => {
      setId(event.target.value)
   }
   return (
      <div className={style.container}>
         <input type="search"
            value={id}
            onChange={handleChange}
            placeholder="Search"
         />

         <button onClick={() => { onSearch(id); setId("") }}>Add</button>
      </div>
   );
}
export default SearchBar
