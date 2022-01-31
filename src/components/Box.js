import React from "react";

class Box extends React.Component {
  renderContent() {
    if (this.props.icon !== "local_drink") {
      return (
        <div>
          <input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onChange={(e) => this.props.onChange(e)} />
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