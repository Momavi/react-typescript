function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__ul">
        <li className="nav__ul-li">
          <a className="nav__ul-li-link" href="#!">Profile</a>
        </li>
        <li className="nav__ul-li">
          <a className="nav__ul-li-link" href="#!">Messages</a>
        </li>
        <li className="nav__ul-li">
          <a className="nav__ul-li-link" href="#!">News</a>
        </li>
        <li className="nav__ul-li">
          <a className="nav__ul-li-link" href="#!">Music</a>
        </li>
        <li className="nav__ul-li">
          <a className="nav__ul-li-link" href="#!">Settings</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;