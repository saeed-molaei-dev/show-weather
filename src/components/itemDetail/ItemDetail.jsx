import React from "react";
import "./ItemDetail.scss";
function ItemDetail({ itemTitle, itemValue, itemIcon }) {
  return (
    <div className="item-detail">
      <div className="item-detail__text-wrapper">
        <span className="item-detail__title">{itemTitle} </span>
        <span className="item-detail__value">{itemValue}</span>
      </div>
      <span className="item-detail__icon">{itemIcon}</span>
    </div>
  );
}

export default ItemDetail;
