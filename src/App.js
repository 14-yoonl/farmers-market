import Main from "./pages/main/main";
import Detail from "./pages/detail/detail";
import Login from "./pages/login";
import Cart from "./pages/order/cart";
import NameCard from "./components/nameCard";
import NavBar from "./components/navigationBar";
import styled from "styled-components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <NameCard />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/detail/:id" component={Detail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  display: flex;
  padding: 24px 144px;
`;
export default App;
