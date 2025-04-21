// components/Container.js
import React from "react";
import "./Container.css";

const Container = ({ children }) => {
  return <div className="responsive-container">{children}</div>;
};

export default Container;
