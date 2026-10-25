import { useEffect, useState } from "react";

function App() {
  const [Title, setTitle] = useState("HELLOW");
  const [name, setName] = useState("amira");

  useEffect(() => {
    document.title = Title;
    console.log(Title);
  }, [Title]);
  

  return (
    <div>
      <h1>enter your name</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
  <h1>chooce Greatin</h1>

      <input
        type="text"
        value={Title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}

export default App; 
               
               
               
               
               

















////  USERKA INPUT HASAMEEYO

// const { useState } = require("react");

 
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
// import { useState } from "react";

// function App() {
//   const [isVisible, setIsVisible] = useState(false);

//   const target = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     <>
//       <button onClick={target}>
//         {isVisible ? "Hide" : "Show"}
//       </button>

//       <p>{isVisible ? " Trun On" : " Trun Off"}</p>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";

// function App(){
//   const  [user,setUser]=useState ({name:"Aliza",Age:12});
//  const updateAge=()=>{
//     setUser({...user,Age:user.Age+1})
//   }
//   return(
//     <>
// <p> Name:{user.name},Age:{user.Age}</p>

// <button onClick={updateAge}>increment Age</button>
//     </>
//   )
// }
// export default App;

// import { useState } from "react";

// function App() {
//   const [item, SetItem] = useState(["mango", "apple"]);

//   const additem = () => {
//     SetItem([...item, "orange"]);
//   };

//   return (
//     <>
//       <ul>
//         {item.map((item) => (
//           <li>{item}</li>
//         ))}
//       </ul>

//       <button onClick={additem}>add batato</button>
//     </>
//   );
// }

// export default App;



// import Todolist from "./Todolist";

// function App() {
//   return (
//     <>
//       <Todolist />
//     </>
//   );
// }

// export default App;


             // exercise5

// /import ShoppingCart from "./ShoppingCart";

// function App() {
//   return <ShoppingCart />;
// }

// export default App;
