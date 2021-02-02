import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
const MythItem = (props) => {
  const mythItemName = props.match.params.myth;
  const mythItem = useDispatch();
  const mythItemState = useSelector((state) => state.MythItem);
  console.log("myth-item",mythItemName);
  return <div></div>;
};
export default MythItem;
