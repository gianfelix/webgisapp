import { Route, Router } from "react-router-dom";
import Login from "./components/Login";
import Map from "./components/Map";

function App() {
  return (
    <>
      <Router>
        <Route  path="/" component={Login} />
        <Route  path="/map" component={Map} />
      </Router>
    </>
  );
}

export default App;
