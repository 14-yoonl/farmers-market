import React from "react";

const CartListItem = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div>{data.count}</div>
      <div>{data.name}</div>
      <div>{data.price}</div>
      <div>{data.thumbnail}</div>
    </div>
  );
};

export default CartListItem;
