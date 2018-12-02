import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";

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
          <Route path="/user/register" component={RegisterUserView} />
          <Route path="/user" component={UserView} />
          <PrivateRoute path="/inventory" component={InventoryView} user={this.props.user}/>
          <PrivateRoute path="/sale" component={SaleView} />
          <Route path="/search" component={ItemSearch} />
        </Switch>
      </div>
    );
  }
}

export default MainLayout;
