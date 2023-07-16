import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import User from './Pages/User';
import Post from './Pages/Post';
import Card from './Pages/Card';


     function App() { 
          return (
          <>
             <BrowserRouter>
             <Routes>
               <Route path='/' element={<User/>}>
                <Route index element = {<Main/>}/>
                <Route path='/post' element={<Post/>}/>

               </Route>
             </Routes>
            
             </BrowserRouter>

          </>
           );
          }

         export default App;
