import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Logout from "./components/Logout/Logout";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/Header/Header";
import SavedCards from "./components/SavedCards/SavedCards";
function App() {
  return (
    <>
      <Header />
      <div style={styles.container}>
        <Switch>
          <Route path="/register" component={SignUp} />
          <Route path="/login" component={SignIn} />
          <Route path="/logout" component={Logout} />
          <Route path="/savedcards" component={SavedCards} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: "1rem",
  },
};

export default App;
