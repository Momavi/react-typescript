import './Navbar.scss';

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__item">
        <li className="nav__item-li">
          <a className="nav__item-li-link" href="#!">Profile</a>
        </li>
        <li className="nav__item-li">
          <a className="nav__item-li-link" href="#!">Messages</a>
        </li>
        <li className="nav__item-li">
          <a className="nav__item-li-link" href="#!">News</a>
        </li>
        <li className="nav__item-li">
          <a className="nav__item-li-link" href="#!">Settings</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;