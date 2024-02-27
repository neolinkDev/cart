import { Navbar } from './components/Navbar';
import { ShoppingCart } from './components/Icons';

function App() {
  return (
    <>
      <Navbar>
        <ShoppingCart />
      </Navbar>
      <main className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h1>Cart</h1>
      </main>
    </>
  );
}

export default App;
