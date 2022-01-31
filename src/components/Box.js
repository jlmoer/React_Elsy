import React from "react";

class Box extends React.Component {
  renderContent() {
    if (this.props.icon !== "local_drink") {
      return (
        <div>
          <input type="range" onChange={this.handleUsername} min="" max="" value="" onChange="" />
        </div>
      )
    }
  }
  render() {
    return (
      <div className="box col-sm-3 col-6">
        <span className="material-icons" style={{ fontSize: 100, color: this.props.color }}>
          {this.props.icon}
        </span>
        <p>{this.props.value} {this.props.unit}</p>
        {this.renderContent()}
      </div>

    )
  }
}

export default Box;