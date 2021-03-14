import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from './containers/Create';
import List from './containers/List';
import Edit from './containers/Edit';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/create" component={Create} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
