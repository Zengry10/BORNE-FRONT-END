import './App.css';
import Register from './Modal/Register'
import Login from './Modal/Login'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from './Screens/Nav'
import Store from './Providers/Store'
import Menu from './Screens/Menu'
import MenuBurger from './Screens/MenuBurger'
import MenuComplement from './Screens/MenuComplement'
import MenuDrink from './Screens/MenuDrink'

function App() {
  return (
    <div className="m-0">
      <Store>
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path='/menu/' element={<Menu/>}></Route>
            <Route path='/menu/:id' element={<MenuBurger/>}></Route>
            <Route path='/menu/component/:id' element={<MenuComplement/>}></Route>
            <Route path='/menu/drink/:id' element={<MenuDrink/>}></Route>
          </Routes>
        </BrowserRouter>
      </Store>
    </div>
  );
}

export default App;
