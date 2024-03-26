import { useGlobalContext } from '../utils/functions/fns';
import { CartItem } from './CartItem';

export const Cart = () => {
  const {
    cartState: { cart },
    clearShoppingCart,
    subTotal,
    totalIVA,
    total,
  } = useGlobalContext();

  const shoppingCartArray = Array.from(cart.entries());

  if (shoppingCartArray.length === 0) {
    return (
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Your Cart
              </h1>
              <h4 className="mt-4 text-gray-500">El carrito esta vacío</h4>
            </header>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            {/* cart items */}
            <ul className="space-y-4">
              {shoppingCartArray.map((shoppingCartItem) => {
                const [id, item] = shoppingCartItem;
                return <CartItem key={id} {...item} />;
              })}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>${subTotal}</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>IVA(16%)</dt>
                    <dd>${totalIVA.toFixed(2)}</dd>
                  </div>

                  {/* <div className="flex justify-between">
                    <dt>Discount</dt>
                    <dd>-£20</dd>
                  </div> */}

                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>${total.toFixed(2)}</dd>
                  </div>
                </dl>

                <div className="flex justify-center">
                  <a
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    onClick={clearShoppingCart}
                  >
                    Vaciar carrito
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
