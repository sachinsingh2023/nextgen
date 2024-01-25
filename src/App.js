import './App.css';
import Cart from './comp/Cart';
import Home from './comp/Home';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import Login from './comp/Login';
import Mobile from './navcom/Mobile';
import Printer from './navcom/Printer';
import Accersrise from './navcom/Accersrise';
import Laptop from "../src/navcom/Laptop";
import Storage from "../src/navcom/Storage";
import HomeApl from "../src/navcom/HomeApl";
import Hadephone from './navcom/Hadephone';
import CompAcc from "../src/navcom/ComAccerioes";
function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/mobile' element={<Mobile/>}/>
  <Route path='Accerise' element={<Accersrise/>}/>
  <Route path='/laptop' element={<Laptop/>}/>
  <Route path='/printer' element={<Printer/>}/>
  <Route path='/storage' element={<Storage/>}/>
<Route path='/Homeapli' element={<HomeApl/>}/>
  <Route path="/hadephone" element={<Hadephone/>}/>
  <Route path='/compacc' element={<CompAcc/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
