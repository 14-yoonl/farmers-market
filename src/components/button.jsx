import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.div`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.width || "max-content"};
  padding: 0 16px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.size === "small" ? "48px" : "56px")};
  border-radius: 8px;
  &:hover {
    opacity: ${(props) => props.type !== "transparent" && 0.7};
    background-color: ${(props) => props.type === "transparent" && "#f5f5f5"};
    cursor: pointer;
  }
`;

const buttonTypes = (type) => {
  if (type === "primary") {
    return {
      backgroundColor: "blue",
      color: "white",
    };
  } else if (type === "secondary") {
    return {
      backgroundColor: "white",
      color: "blue",
      border: "2px solid",
      borderColor: "blue",
    };
  } else {
    return {
      color: "black",
      paddingTop: "8px",
      paddingBottom: " 8px",
      borderRadius: "32px",
      height: "max-content",
    };
  }
};
const disableButton = (isDisabled) => {
  if (isDisabled) {
    return {
      backgroundColor: "#f5f5f5",
      borderColor: "#cccccc",
      color: "#acacac",
      cursor: "default",
      pointerEvents: "none",
    };
  } else {
    return null;
  }
};

function Button({ label, renderIcon, type, disabled, onClick, ...props }) {
  return (
    <StyledButton
      type={type}
      {...props}
      style={{ ...buttonTypes(type), ...disableButton(disabled) }}
      onClick={onClick}
    >
      {renderIcon}
      <div className="--body2" style={renderIcon && { marginLeft: "4px" }}>
        {label}
      </div>
    </StyledButton>
  );
}

Button.propTypes = {
  width: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary", "transparent"]),
  size: PropTypes.oneOf(["small", "medium"]),
  label: PropTypes.string,
  onClick: PropTypes.func,
  renderIcon: PropTypes.object,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: "primary",
  size: "medium",
  onClick: undefined,
  disabled: false,
};
export default Button;
