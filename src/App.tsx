import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import RoutesTotal from './route';
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <RoutesTotal />
        </Router>
      </Provider>
    </>
  );
};

export default App;
