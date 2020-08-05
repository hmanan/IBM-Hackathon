import React, { Component } from "react";

/* COMPONENTS */
import CarbonHeader from "../components/CarbonHeader";

/* STYLES */
import "./inventory.scss";

class inventory extends Component {

  render() {
    return (
      <>
        <CarbonHeader />
        <div className="panel-container">
        <iframe
            src="https://dataplatform.cloud.ibm.com/dashboards/9238b07e-cabc-4920-bfce-f7dddfe651a1/view/7012da2b209130f168c7c0e407992d5579332c09b0bbd10bd1807b4906327397f06b1498c87c4c5fd2140060f7ea165f9a"
            width={1600}
            height={900}
            frameborder={0}
            gesture="media"
            allow="encrypted-media"
            allowfullscreen=""
          />
        </div>
      </>
    );
  }
}

export default inventory;