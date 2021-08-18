import Main from "./pages/main";
import Detail from "./pages/detail";
import Login from "./pages/kakaologin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/detail/:id" component={Detail} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
