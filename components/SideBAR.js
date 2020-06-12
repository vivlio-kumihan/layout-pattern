import React from "react";
import Sidebar from "react-sidebar";

class SideBAR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: true,
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={
          <div className="sidebar">
            <ul>
              <li><a href="/">link to link</a></li>
              <li><a href="/">link to link</a></li>
              <li><a href="/">link to link</a></li>
              <li><a href="/">link to link</a></li>
              <li><a href="/">link to link</a></li>
              <li><a href="/">link to link</a></li>
              <li><a href="/">link to link</a></li>
              <li><a href="/">link to link</a></li>
            </ul>
            <p>Sidebar content</p>
          </div>
          }
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: 
          { 
            width: "16rem",
            paddingLeft: "1rem",
            fontSize: "0.9rem",
            lineHeight: 1.3,
            background: "white"
          } }}>
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open<br />sidebar
        </button>
      </Sidebar>
    );
  }
}

export default SideBAR;