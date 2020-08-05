import React, { Component } from "react";

import { withRouter } from "react-router";

/* COMPONENTS */
import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction
} from "carbon-components-react/lib/components/UIShell";

/* STYLES */
import "./CarbonHeader.scss";

/* ICONS */
import Menu24 from "@carbon/icons-react/lib/menu/24";
import Settings24 from "@carbon/icons-react/lib/settings/24";
import Help24 from "@carbon/icons-react/lib/help/24";

const page = {
  forecast: "/",
  addInventory: "/addInventory",
  inventory: "/inventory"
};

class CarbonHeader extends Component {

  navigateTo = path => {
    // Push page to routing history to change page
    this.props.history.push(path);
  };

  render() {
    return (
      <div className="containing-div">
        <Header aria-label="IBM Platform Name">
          <HeaderGlobalAction
          aria-label="Menu"
        >
          <Menu24 className="menu-icon" />
        </HeaderGlobalAction>

          <HeaderName
            prefix="IBM"
          >
            Gourmet Center
          </HeaderName>
          <HeaderName
            className="global-tab"
            prefix=""
            onClick={this.navigateTo.bind(this, page.forecast)}
          >
            Customer Forecast
          </HeaderName>
          <HeaderName
            className="global-tab"
            prefix=""
            onClick={this.navigateTo.bind(this, page.inventory)}
          >
            Inventory Prediction
          </HeaderName>
          <HeaderName
            className="global-tab"
            prefix=""
            onClick={this.navigateTo.bind(this, page.addInventory)}
          >
            Inventory
          </HeaderName>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Settings">
              <Settings24 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Help">
              <Help24 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Profile">
              <div className="user-profile-circle">A</div>
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      </div>
    );
  }
}

/* WRAP WITH ROUTER SO IT HAS ROUTING HISTORY */
export default withRouter(CarbonHeader);
