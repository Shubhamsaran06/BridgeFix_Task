import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import CartProvider from './context/CartProvider';

function App() {
  return (
    <CartProvider>
      <Navbar/>
      <Home/>
      <Cart/>
    </CartProvider>
  );
}

export default App;
