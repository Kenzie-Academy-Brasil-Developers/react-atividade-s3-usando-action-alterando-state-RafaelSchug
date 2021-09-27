import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import UserCard from './component/UserCard';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserCard></UserCard>
     </div>
    </Provider>
  );
}

export default App;
