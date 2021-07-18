import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogContainer';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';

import { Route } from 'react-router-dom';

import './App.scss';

function App(props: any) {
  return (
    <div className="App">
      <HeaderContainer />
      <Navbar />
      <div className="content">
        <Route path='/profile/:userId?'
          render={() => <ProfileContainer />} />
        <Route path='/dialogs'
          render={() => <DialogsContainer />} />
        <Route path='/users'
          render={() => <UsersContainer />} />
        <Route path='/login'
          render={() => <LoginPage />} />
      </div>
    </div>
  );
}

export default App;
