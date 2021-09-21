import React from "react";

const CartListItem = ({ data }) => {
  return (
    <div>
      <div>{data.count}</div>
      <div>{data.name}</div>
      <div>{data.price * data.count}</div>
      <div>{data.thumbnail}</div>
    </div>
  );
};

export default CartListItem;
