import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Preloader from './components/common/preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));


function App(props: any) {
  return (
    <div className="App">
      <HeaderContainer />
      <Navbar />
      <Suspense fallback={<Preloader />}>
        <div className="content">
          <Route path='/profile/:userId?'
            render={() => <ProfileContainer />} />
          <Route path='/dialogs'
            render={() => <DialogsContainer />} />
          <Route path='/users'
            render={() => <UsersContainer />} />
          <Route path='/login'
            render={() => <LoginContainer />} />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
