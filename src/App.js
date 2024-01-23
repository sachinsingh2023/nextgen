import './App.css';
import Cart from './comp/Cart';
import Home from './comp/Home';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import Login from './comp/Login';
import Mobile from './navcom/Mobile';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/mobile' element={<Mobile/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
