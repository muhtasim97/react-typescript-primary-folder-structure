import bmw1 from '../../images/bmw1.jpg';
import Header from '../header/Header';
import './card.scss';
const Card = () => {
  return (
    <>
      <Header />
      <div className='p-card'>
        <div className='p-card__body'>
          <img className='p-card__body__image' src={bmw1} alt='' />
          <h1 className='p-card__body__headline'>BMW</h1>
          <p className='p-card__body__price'>$100000</p>
          <p className='p-card__body__text'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum asperiores natus
            veritatis. Consequatur maiores ullam, quia dolores tenetur architecto delectus id quos
            aliquid a adipisci, sit dolore corporis distinctio molestiae.
          </p>
        </div>
        <div className='p-card__body'>
          <img className='p-card__body__image' src={bmw1} alt='' />
          <h1 className='p-card__body__headline'>BMW</h1>
          <p className='p-card__body__price'>$100000</p>
          <p className='p-card__body__text'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum asperiores natus
            veritatis. Consequatur maiores ullam, quia dolores tenetur architecto delectus id quos
            aliquid a adipisci, sit dolore corporis distinctio molestiae.
          </p>
        </div>
        <div className='p-card__body'>
          <img className='p-card__body__image' src={bmw1} alt='' />
          <h1 className='p-card__body__headline'>BMW</h1>
          <p className='p-card__body__price'>$100000</p>
          <p className='p-card__body__text'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum asperiores natus
            veritatis. Consequatur maiores ullam, quia dolores tenetur architecto delectus id quos
            aliquid a adipisci, sit dolore corporis distinctio molestiae.
          </p>
        </div>
      </div>
    </>
  );
};
export default Card;
