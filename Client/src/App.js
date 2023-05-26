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
const URL = 'http://localhost:3001/rickandmorty/login/';
// const email = "dael@gmail.com"
// const password = "1234567"

function App() {

   const location = useLocation();//para saber en que componente estoy ubicado
   const [characters, setCharacters] = useState([])//creacion del estado loca llamado characters esto es para modificar 
   //el estado
   const [access, setAccess] = useState(false)
   const navigate = useNavigate()



   // const login = (userData) => {
   //    if (userData.password === password && userData.email === email) {
   //       setAccess(true);
   //       navigate('/home');// si la informacion es correcta nos dirijira a /home
   //    } else {
   //       alert('Usuario o contraseña incorrecta')
   //    }
   // }


   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         // console.log(data);
         const { access } = data;
         setAccess(access);
         if(!access) throw Error()
         access && navigate('/home');
      } catch (error) {
         alert('Usuario o contraseña' )
      }
   }
   // const login = (userData) => {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`)
   //       .then(( {data} ) => {
   //          console.log(data);
   //          const { access } = data;   
   //          setAccess(access);
   //          access && navigate('/home');
   //       });
   // }

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
      // const onSearch = (id) => {
      //    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      //       .then(({ data }) => {
      //          if (data.name) {
      //             setCharacters((oldChars) => [...oldChars, data]);
      //          } else {
      //             window.alert('¡No hay personajes con este ID!');
      //          }
      //       });
      // }

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
