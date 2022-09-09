import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className='p-header'>
      <div className='p-header__icon'>
        <h1>Redux Assignment</h1>
        <Link to='/card'>
          <FontAwesomeIcon className='p-header__icon__size' icon={faCartArrowDown} />
        </Link>
      </div>
    </header>
  );
};
export default Header;
