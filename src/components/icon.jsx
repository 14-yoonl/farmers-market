import React from "react";
import PropTypes from "prop-types";

import icons from "../assets/icons";

function Icon({ src, size, fill }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={icons[src]} fill={fill} />
    </svg>
  );
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  fill: PropTypes.string,
};

Icon.defaultProps = {
  src: "add",
  size: "24",
  fill: "black",
};
export default Icon;
