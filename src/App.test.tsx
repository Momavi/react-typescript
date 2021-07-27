import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');



  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>, div
  );



  ReactDOM.unmountComponentAtNode(div);
});