import React from "react";

class TabBar extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <ul className="nav nav-tabs">
          {this.props.tabs.map((tab) => {
            const active = tab === this.props.selected ? "active" : ""; //equal to this style or no style

            return (
              //returns the rendered tab
              <li className="nav-items" keys={tab}>
                <a
                  className={"nav-link " + active}
                  onClick={() => this.props.setSelected(tab)}
                >
                  {tab}
                </a>
              </li>
            );
          })}
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default TabBar;
