import { CartProvider } from './contexts/CartContext';
import './css/main.scss';
import PrincipalRouter from './routers/PrincipalRouter';
function App() {
  return (
    <CartProvider>
      <PrincipalRouter />
    </CartProvider>
  );
}

export default App;
