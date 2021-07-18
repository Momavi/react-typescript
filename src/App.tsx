import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogContainer';
import UsersContainer from './components/Users/UsersContainer';

import { Route } from 'react-router-dom';

import './App.scss';

function App(props: any) {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="content">
        <Route path='/profile/:userId?'
          render={() => <ProfileContainer />} />
        <Route path='/dialogs'
          render={() => <DialogsContainer />} />
        <Route path='/users'
          render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;
