import { Route } from 'react-router-dom';
import './App.scss';
import DialogsContainer from './components/Dialogs/DialogContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

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
