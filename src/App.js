import Main from "./pages/main/main";
import Detail from "./pages/detail/detail";
import Login from "./pages/login";
import Cart from "./pages/order/cart";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Main} />
        <Route path="/detail/:id" component={Detail} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}
export default App;
