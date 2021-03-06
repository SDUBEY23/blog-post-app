import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogList from "./containers/BlogList";
import BlogDetail from "./containers/BlogDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={BlogList} />
          <Route path="/blog/:blogId" exact component={BlogDetail} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
