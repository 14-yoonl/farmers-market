import React from "react";
import Item from "../../components/cartListItem";
import { useSelector } from "react-redux";
const DetailDesc = () => {
  const List = useSelector((store) => store.cartReducer);
  console.log(List);

  return (
    <div>
      {List.map((item) => (
        <Item data={item} />
      ))}
    </div>
  );
};

export default DetailDesc;
