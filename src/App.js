import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import UserList from './components/UserList';
import { Route } from 'react-router-dom';
import Profil from './components/Profil';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Route path="/" component={UserList}/>
      <Route path="/profil/:id" component={Profil}></Route>
    </div>
  );
}

export default App;
