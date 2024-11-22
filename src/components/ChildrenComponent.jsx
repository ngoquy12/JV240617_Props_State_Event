import React from "react";

export default function ChildrenComponent({ userName }) {
  userName = "Nguyễn Văn B";
  return (
    <>
      <h3>ChildrenComponent</h3>
      <h3>UserName: {userName}</h3>
    </>
  );
}
