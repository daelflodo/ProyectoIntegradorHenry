import './App.css';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

const EMAIL = "dael@gmail.com"
const PASSWORD = "1234567"

function App() {

   const location = useLocation();//para saber en que componente estoy ubicado
   const [characters, setCharacters] = useState([])//creacion del estado loca llamado characters esto es para modificar 
   //el estado
   const [access, setAccess] = useState(false)
   const navigate = useNavigate()

   // const onSearch=()=>{//funcion modifica el estado agregando nuevos personaje
   //    setCharacters([...characters,example])// hacemos unacopia del estado y agregamos el personaje 
   // }

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');// si la informacion es correcta nos dirijira a /home
      } else {
         alert('Usuario o contraseña incorrecta')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }

   // creamos una funcion onClose
   const onClose = (id) => {
      let charactersFilter = characters.filter((character) =>
         character.id !== Number(id))
      setCharacters(charactersFilter)
   }

   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} access={access} setAccess={setAccess} />}{/*pasamos como propiedad  onSearch al componente Nav*/}
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={< About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
         </Routes>
      </div>
   );
}

export default App;
