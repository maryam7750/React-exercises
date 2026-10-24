               ////  USERKA INPUT HASAMEEYO
 
 // import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   const handleChange = (event) => {
//     console.log(event.target.value);
//     setName(event.target.value);
//   };

//   return (
//     <>
//       <input type="text" value={name} onChange={handleChange} />
//       <p>Hello, {name}</p>
//     </>
//   );
// }

// export default App;

                 //// markaste 1kudar 


// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//     console.log(count);
//   };

//   return (
//     <>
//       <p>You clicked {count} times</p>
//       <button onClick={increment}>Click me</button>
//     </>
//   );
// }

// export default App;

        //  BUTTONLA HIDEN IYO SHOW KU SAMEEY
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const target = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button onClick={target}>
        {isVisible ? "Hide" : "Show"}
      </button>

      <p>{isVisible ? " Trun On" : " Trun Off"}</p>
    </>
  );
}

export default App;