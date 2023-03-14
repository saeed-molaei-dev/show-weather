import React from "react";
import "./ItemDetail.scss";

function ItemDetail({ itemTitle, itemValue, itemIcon }) {
  return (
    <div className="item-detail">
      <div className="item-detail__header-wrapper">
        <span>{itemTitle} </span>
        <span>{itemIcon}</span>
      </div>
      <span className="item-detail__value">{itemValue}</span>
    </div>
  );
}

export default ItemDetail;
