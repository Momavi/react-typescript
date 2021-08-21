import { NavLink } from 'react-router-dom';
import Logo from '../common/logo/logo';
import './Header.scss';

function Header(props: any) {
  return (
    <header className="header">
      <Logo />
      <div className="header__inner">
        <div className="header__login" >

          {
            props.isAuth ? props.login
              : <NavLink className="header__login-link" to={'/login'}>Login</NavLink>
          }

        </div>
      </div>

    </header>

  );
}

export default Header;