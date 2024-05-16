import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Home from "../views/Home";
import SignIn from "../views/SignIn";
import ProtecterRoute from "../components/ProtecterRoute";

const Routes = () => (
  <>
    <Router>
      <Switch>
        <Route
          path="/"
          element={
            <ProtecterRoute>
              <Home />
            </ProtecterRoute>
          }
        />
        <Route path="/sign-in" element={<SignIn />} />
      </Switch>
    </Router>
  </>
);

export default Routes;
