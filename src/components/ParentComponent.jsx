import React from "react";
import ChildrenComponent from "./ChildrenComponent";
import Button from "./Button";

export default function ParentComponent({ userName }) {
  return (
    <>
      <h3>ParentComponent</h3>

      <hr />

      <Button disable={true}>
        <a href="#">Click me</a>
      </Button>

      <hr />
      <ChildrenComponent userName={userName}></ChildrenComponent>
    </>
  );
}
