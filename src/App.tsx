import { Navbar } from './components/Navbar';
import { ShoppingCart } from './components/Icons';
import { Cart } from './components/Cart';
import { useGlobalContext } from './utils/functions/fns';
import Spinner from './components/spinner/Spinner';

function App() {

  const { cartState: { isLoading } } = useGlobalContext();
 
  if(isLoading){
    return(
      <main>
        <Spinner />
      </main>
    )
  }
  
  return (
    <>
      <Navbar>
        <ShoppingCart />
      </Navbar>
      <main className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Cart />
      </main>
    </>
  );
}

export default App;
