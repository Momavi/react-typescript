import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
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
        <Route exact path='/profile'
          render={() => <Profile />} />
        <Route exact path='/dialogs'
          render={() => <DialogsContainer />} />
        <Route exact path='/users'
          render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;
