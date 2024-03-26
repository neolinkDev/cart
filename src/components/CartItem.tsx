import { useGlobalContext } from '../utils/functions/fns';
import { CartItem as CartItemProps } from '../interfaces/interfaces';
import { Button } from './Button';
import { AddIcon, MinusIcon, TrashIcon } from './Icons';

export const CartItem = ({ id, title, price, img, amount }: CartItemProps) => {
  const { removeItem, increaseItemAmount, decreaseItemAmount } =
    useGlobalContext();

  return (
    <li>
      <article className="flex items-center gap-4">
        <img src={img} alt={title} />

        <div>
          <h3 className="font-bold text-sm text-gray-900">{title}</h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              {/* <dt className="inline">$</dt> */}
              <span className="block text-gray-500 text-xl">${price}</span>
            </div>
          </dl>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Button onClick={() => increaseItemAmount(id)}>
            <AddIcon />
          </Button>
          <span className="">{amount}</span>
          <Button onClick={() => decreaseItemAmount(id)}>
            <MinusIcon />
          </Button>

          <Button onClick={() => removeItem(id)}>
            <TrashIcon />
          </Button>
        </div>
      </article>
    </li>
  );
};
