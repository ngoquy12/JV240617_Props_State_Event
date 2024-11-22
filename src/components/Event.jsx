import React from "react";

export default function Event() {
  const handleClick = (event, id) => {
    console.log("Clicked: ", event, id);
  };

  const handleDoubleClick = (event) => {
    console.log("Double click: ", event);
  };

  const products = [
    {
      id: 1,
      productName: "Cam",
      price: 10000,
    },
    {
      id: 2,
      productName: "Dưa hấu",
      price: 20000,
    },
  ];

  const handleEdit = (id) => {
    console.log("Id edit: ", id);
  };

  const handleDelete = (id) => {
    console.log("Id delete: ", id);
  };

  const handleChange = (e) => {
    console.log("Event: ", e.target.value);
  };

  const handleSubmit = (e) => {
    // Ngăn chặn sử kiện mặc định của Form
    e.preventDefault();
    console.log("Submit");
  };

  return (
    <div>
      <button onClick={(event) => handleClick(event, 10)}>Click me</button>
      <button onDoubleClick={handleDoubleClick}>Double click</button>

      <input type="text" onChange={handleChange} />

      <h3>List product</h3>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((pro, index) => (
            <tr key={pro.id}>
              <td>{index + 1}</td>
              <td>{pro.productName}</td>
              <td>{pro.price}</td>
              <td>
                <button onClick={() => handleEdit(pro.id)}>Sửa</button>
                <button onClick={() => handleDelete(pro.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
