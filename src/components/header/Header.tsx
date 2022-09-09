import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import './Header.scss';

const Header = () => {
  const cart = useSelector((state: RootState) => state.card.cart);
  return (
    <header className='p-header'>
      <h1 className='p-header__text'>Redux Assignment</h1>
      <div className='p-header__icon'>
        <Link to='/card'>
          <FontAwesomeIcon className='p-header__icon__size' icon={faCartArrowDown} />
        </Link>
        <p className='p-header__icon__count'>{cart?.length}</p>
      </div>
    </header>
  );
};
export default Header;
