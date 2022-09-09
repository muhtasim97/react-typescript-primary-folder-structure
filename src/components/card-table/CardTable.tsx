import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useAppDispatch } from '../../store.hooks';
import Header from '../header/Header';
import { setCart } from '../redux/card.slice';
import './CardTable.scss';

interface Props {
  data: any;
}

const CardTable: React.FC<Props> = ({ data }) => {
  const cart = useSelector((state: RootState) => state.card.cart);
  const dispatch = useAppDispatch();
  const addToCart = (product: any) => {
    const newCart: Array<any> = [...cart];
    if (newCart.find((c: any) => c.product === product)) {
      newCart.map((c: any, index: any) => {
        if (c.product === product) {
          const newObj = {
            product: product,
            quantity: c.quantity + 1,
          };
          newCart[index] = newObj;
          dispatch(setCart(newCart));
        }
      });
    } else {
      const obj: any = {
        product: product,
        quantity: 1,
      };
      newCart.push(obj);
    }
    dispatch(setCart(newCart));
  };

  return (
    <>
      <Header />
      <section className='p-card-table'>
        <section className='p-card-table__body'>
          <table className='p-card-table__table'>
            <tr>
              <th>Product Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
            {data.map((element: any, index: any) => {
              return (
                <tr key={index}>
                  <td>{element.name}</td>
                  <td>
                    <img src={element.image} alt='' />
                  </td>
                  <td>{element.price}</td>
                  <td>
                    <button onClick={() => addToCart(element)}>Add to Cart</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </section>
      </section>
    </>
  );
};
export default CardTable;
