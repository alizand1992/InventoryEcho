import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Nav
import Nav from "./Navigation";

// Views
import HomeView from "../views/HomeView";
import InventoryView from "../views/InventoryView";
import SaleView from "../views/SaleView";
import ItemSearch from "../components/ItemSearch";
import UserView from "../views/UserView";
import RegisterUserView from "../views/RegisterUserView";

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/inventory" component={InventoryView} />
          <Route path="/sale" component={SaleView} />
          <Route path="/search" component={ItemSearch} />
          <Route path="/user/register" component={RegisterUserView} />
          <Route path="/user" component={UserView} />
        </Switch>
      </div>
    );
  }
}

export default MainLayout;
