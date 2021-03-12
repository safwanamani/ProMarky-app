import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from './containers/Create';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={Create} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
