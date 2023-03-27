import React from "react";

class ImageComponent extends React.Component {
  render() {
    return <img src={this.props.Image} alt={this.props.Description} />;
  }
}

export default ImageComponent;
