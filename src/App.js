import './App.css';
import AuthProvider from './Globals/AuthContext';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
