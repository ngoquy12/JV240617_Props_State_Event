import React from "react";

export default function Button({ children, disable, id }) {
  console.log("children: ", children);

  return (
    <>
      <button id={id} disabled={disable}>
        {children}
      </button>
    </>
  );
}

Button.defaultProps = {
  id: "btn",
};
