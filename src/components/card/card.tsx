import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Header from '../header/Header';
import './card.scss';
const Card = () => {
  const cart = useSelector((state: RootState) => state.card.cart);

  return (
    <>
      <Header />
      <div className='p-card'>
        {cart.map((c: any, index: number) => {
          return (
            <div key={index} className='p-card__body'>
              <img className='p-card__body__image' src={c.product.image} alt='' />
              <h1 className='p-card__body__headline'>{c.product.name}</h1>
              <p className='p-card__body__price'>{c.product.price}</p>
              <p className='p-card__body__text'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum asperiores natus
                veritatis. Consequatur maiores ullam, quia dolores tenetur architecto delectus id
                quos aliquid a adipisci, sit dolore corporis distinctio molestiae.
              </p>
              <p className='p-card__body__count'>Quantity: {c.quantity}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Card;
