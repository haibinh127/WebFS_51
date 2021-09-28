import './App.css';
import { Cart } from './components/Cart';
import { CartProvider } from './components/CartContext';
import { TshirtList } from './components/TshirtList';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Cart />
        <TshirtList />
      </CartProvider>
    </div>
  );
}

export default App;
