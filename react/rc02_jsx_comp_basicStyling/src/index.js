import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App";
import "./index.css";
const a = 5;
const Element = () => {
  return (
    <>
      <h1>Hello React {a}</h1>
      <p>merhaba</p>
      <Child />
      <Child />
    </>
  );
};

const Child = () => <p>I am child</p>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Element />);
