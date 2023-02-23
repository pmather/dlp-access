import React, { Component } from "react";
import { cleanHTML } from "../../lib/MetadataRenderer";

class HomeStatement extends Component {
  render() {
    if (this.props.homeStatement) {
      return (
        <div
          className="home-statement-wrapper"
          role="region"
          aria-label="Introduction"
        >
          <h2
            style={{
              display: this.props.homeStatement.heading ? "block" : "none"
            }}
          >
            {this.props.homeStatement.heading}
          </h2>
          <div
            style={{
              display: this.props.homeStatement.statement ? "block" : "none"
            }}
            className="home-statement"
          >
            <p>{cleanHTML(this.props.homeStatement.statement, "html")}</p>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default HomeStatement;
