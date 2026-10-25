
// import { useState } from "react";

// const Todolist = () => {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const handleAddTodo = () => {
//     if (inputValue.trim() === "") return;

//     const NewTodo = {
//       id: Date.now(),
//       text: inputValue,
//       completed: false,
//     };
//     setTodos([...todos,NewTodo])
//     setInputValue("")
//     console.log(todos)
    


//   };

//   return (
//     <div>
//       <h2>TO-DO-LIST</h2>

//       <input
//         type="text"
//         placeholder="Enter new list"
//         onChange={(e) => setInputValue(e.target.value)}
//         value={inputValue}
//       />

//       <button onClick={handleAddTodo}>Add</button>

//       <ul>
//         {todos.map((todo) => (
//           <li >{todo.text}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Todolist;







                // exercise5

                
import { useState } from "react";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = () => {
    if (productName.trim() === "" || price === "" || Number(price) <= 0) return;

    const newProduct = {
      id: Date.now(),
      name: productName,
      price: Number(price),
      quantity: 1,
    };

    setProducts([...products, newProduct]);
    setProductName("");
    setPrice("");
  };

  const increaseQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div>
      <h1>Simple Shopping Cart</h1>

      <h2>Add a Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleAddProduct}>Add to Cart</button>

      <h2>Products in Cart</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - $
            {product.price.toFixed(2)}
            <br />

            Quantity:{" "}
            <button onClick={() => decreaseQuantity(product.id)}>-</button>{" "}
            {product.quantity}{" "}
            <button onClick={() => increaseQuantity(product.id)}>+</button>
            <br />

            <button onClick={() => removeProduct(product.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default ShoppingCart;
