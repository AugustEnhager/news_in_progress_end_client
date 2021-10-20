import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Category from "./components/Category";
import IndividualArticle from "./components/IndividualArticle";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route
          exact
          path={"/articles/:id"}
          component={IndividualArticle}
        ></Route>
        <Route exact path={"/category/:category"} component={Category}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
