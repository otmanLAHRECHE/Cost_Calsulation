import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import DashboardContent from "./pharmacy/Dashboard";
import DashboardAdminContent from "./pharmacy/admin/Dashboard_admin";
import PrivateRoute from "./common/private_route";
import SignInSide from "./accounts/login";
import PrivateRoutePC from "./common/private_route_pc";
import PrivateRoutePG from "./common/private_route_pg";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    
      <BrowserRouter>
            <Fragment>
              <div>
                <Routes>
                  <Route exact path="/cuisine" element={<PrivateRoutePC><PrivateRoute><DashboardContent/></PrivateRoute></PrivateRoutePC>} />
                  <Route exact path="/rh" element={<PrivateRoutePG><PrivateRoute><DashboardContent/></PrivateRoute></PrivateRoutePG>} />
                  <Route exact path="/login" element={<SignInSide/>} /> 
                </Routes>
              </div>
            </Fragment>
        </BrowserRouter>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);