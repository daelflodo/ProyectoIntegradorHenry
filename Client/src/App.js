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
import Signup from './components/Signup/Signup';
const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {

   const location = useLocation();
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const navigate = useNavigate()

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         if(!access) throw Error()
         access && navigate('/home');
      } catch (error) {
         alert('Usuario o contraseña' )
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         // console.log(data);
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
      } catch (error) {
         window.alert('¡No hay personajes con este ID!');
      }
   }
      const onClose = (id) => {
         let charactersFilter = characters.filter((character) =>
            character.id !== Number(id))
         setCharacters(charactersFilter)
      }
      return (
         <div className='App'>
            {location.pathname !== '/' && <Nav onSearch={onSearch} access={access} setAccess={setAccess} />}
            <Routes>
               <Route path='/' element={<Form login={login} />} />
               <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
               <Route path='/about' element={< About />} />
               <Route path='/detail/:id' element={<Detail />} />
               <Route path='/favorites' element={<Favorites />} />
               <Route path='/signup' element={<Signup/>} />
            </Routes>
         </div>
      );
   }

   export default App;
