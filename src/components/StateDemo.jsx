import React, { useState } from "react";

const carts = [100, 200, 300, 400, 500, 600];

export default function StateDemo() {
  const [count, setCount] = useState(1);

  const [price, setPrice] = useState(() => {
    const total = carts.reduce((prev, curr) => {
      console.log("Tính toán lại");

      return prev + curr;
    }, 0);

    return total;
  });

  const [userInfo, setUserInfo] = useState({
    id: "1",
    userName: "Yến DT",
    email: "yendt@gmail.com",
  });

  const handleIncrement = () => {
    setCount((prev) => prev + 1); // prev = 1
    setCount((prev) => prev + 2); // prev =  2
    setCount((prev) => prev + 3); // prev = 4
  };

  const handleCountPrice = () => {
    setPrice((prev) => prev + 100);
  };

  const handleUpdateInfo = () => {
    setUserInfo({
      ...userInfo,
      address: "Hà Nội",
      age: 21,
    });
  };

  console.log("Render");

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>

      <hr />
      <h3>Total cart: {price}</h3>
      <button onClick={handleCountPrice}>Count price</button>

      <hr />
      <h3>{JSON.stringify(userInfo)}</h3>
      <button onClick={handleUpdateInfo}>Update Info</button>
    </div>
  );
}
