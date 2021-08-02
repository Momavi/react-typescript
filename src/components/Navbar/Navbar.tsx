import { NavLink } from 'react-router-dom';

import './Navbar.scss';

function Navbar() {
  return (
    <nav className="nav" id="nav">
      <ul className="nav__item">
        <li className="nav__item-li">
          <NavLink className="nav__item-li-link" to="/profile">Profile</NavLink>
        </li>
        <li className="nav__item-li">
          <NavLink className="nav__item-li-link" to="/dialogs">Messages</NavLink>
        </li>
        <li className="nav__item-li">
          <NavLink className="nav__item-li-link" to="/users">Users</NavLink>
        </li>
        <li className="nav__item-li">
          <NavLink className="nav__item-li-link" to="/news">News</NavLink>
        </li>
        <li className="nav__item-li">
          <NavLink className="nav__item-li-link" to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;