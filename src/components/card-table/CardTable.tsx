import Header from '../header/Header';
import './CardTable.scss';

interface Props {
  data: any;
}
const CardTable: React.FC<Props> = ({ data }) => {
  return (
    <section className='p-card-table'>
      <Header />
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
                <td><img src={element.image} alt="" /></td>
                <td>{element.price}</td>
                <td>
                  <button>Add to Cart</button>
                </td>
              </tr>
            );
          })}
        </table>
      </section>
    </section>
  );
};
export default CardTable;
