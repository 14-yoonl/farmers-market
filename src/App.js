import Main from "./pages/main";
import Detail from "./pages/detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
