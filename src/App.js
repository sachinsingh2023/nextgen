import './App.css';
import Cart from './comp/Cart';
import Home from './comp/Home';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import Login from './comp/Login';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/Login' element={<Login/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
