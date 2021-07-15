import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';

function App(props: any) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className="content">
          <Route exact path='/profile'
            render={() => <Profile
              state={props.state.profilePage} />} />
          <Route exact path='/dialogs'
            render={() => <Dialogs
              state={props.state.dialogsPage} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
