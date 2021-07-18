import { NavLink } from 'react-router-dom';
import Logo from '../common/logo/logo';
import './Header.scss';

function Header(props) {
  return (
    <header className="header" onClick={ () => console.log(props)}>
      <Logo />
      <div className="header__login" >
        {
          props.isAuth ? props.login
          : <NavLink className="header__login-link" to={'/login'}>Login</NavLink>
        }

      </div>
    </header>
  );
}

export default Header;