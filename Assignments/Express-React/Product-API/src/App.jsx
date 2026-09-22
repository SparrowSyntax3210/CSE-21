import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState({});

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const getProducts = async () => {
    try {
      const res = await fetch(
        "http://localhost:4000/api/products"
      );

      const data = await res.json();

      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:4000/api/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            price,
            category,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      setName("");
      setPrice("");
      setCategory("");

      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Product Management Page</h1>

      <h2>Add Products</h2>

      <form onSubmit={addProduct}>
        <input
          type="text"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter product category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">
          Add Product
        </button>
      </form>

      <hr />

      <h2>Product</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{`${data.name}`}</td>
            <td>{`${data.price}`}</td>
            <td>{`${data.category}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;