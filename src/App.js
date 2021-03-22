import React from 'react';
import './styles/App.scss';
import Home from './components/Home';
import {Provider} from 'react-redux';
import store from './store/store';
function App() {

    
  return (
    <Provider store={store}>
      <div>
      <Home/>
   </div>
    </Provider>
  );
}

export default App;
