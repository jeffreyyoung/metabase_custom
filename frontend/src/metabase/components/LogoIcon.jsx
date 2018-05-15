import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export default class LogoIcon extends Component {
  static defaultProps = {
    size: 32,
    style: {}
  };

  static propTypes = {
    size: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    dark: PropTypes.bool,
  };

  render() {
    let { dark, height, width, size } = this.props;
    let dimension = Math.max(...[parseInt(height), parseInt(width), parseInt(size)].filter(Boolean));

    return (
      <img
        src={dark ? 'app/assets/img/plenadata-logo-white.png' : 'app/assets/img/plenadata-logo.png'}
        width={dimension}
        height={dimension}
        fill="currentcolor"
        style={this.props.style}
      />
    );
  }
}
