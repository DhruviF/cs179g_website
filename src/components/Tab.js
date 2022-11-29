import React from "react";
import "./Tab.css";

class Tab extends React.Component {
  render() {
    if (this.props.isSelected) {
      return <div className="tab-font">{this.props.children}</div>;
    }

    return null;
  }
}

export default Tab;
