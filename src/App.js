import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import { Route, Switch } from "react-router-dom";
import UserList from './components/UserList'
import UserListAxios from "./components/UserListAxios";
import Profil from "./components/Profil";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
       {/* <Route path='/' component={UserList}
       /> */}
      <Route exact path='/' component={UserListAxios} />
      <Route  exact path='/profil/:id' render={(props)=>
      <Profil {...props} />
      } />
      </Switch>
    </div>
  );
}

export default App;
