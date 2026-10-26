

import UserList from './UserList';

function App()   {
  const users = [
    { id: 1, name: 'mira', email: 'miira@example.com' },
    { id: 2, name: 'mscuud', email: 'mascuud.com' },
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default App;









// import React, { useState, useEffect } from 'react';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       } finally {
//         // Whether success or error, stop the loading state
//         setLoading(false);
//       }
// //     };

//     // Trigger the fetch when the component mounts
//     fetchUsers();
//   }, []); // Runs only once on mount

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h2>List of Users</h2>
//       <ul>
//         {users.map((u) => (
//           <li key={u.id}>{u.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// ;





// import React, { useState, useEffect } from 'react';

// function App() {
//   const [time, setTime] = useState(0);
//   const [seconds, setSeconds] = useState('');
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     if (!isRunning) return;

//     const timeid = setInterval(() => {
//       setTime((prev) => {
//         if (prev <= 1) {
//           clearInterval(timeid);
//           setIsRunning(false);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timeid);
//   }, [isRunning]);

//   return (
//     <div>
//       <h1>Countdown Timer</h1>
//       <label htmlFor="set-time">Enter seconds:</label>
//       <input
//         id="set-time"
//         type="number"
//         placeholder="Enter seconds"
//         value={seconds}
//         onChange={(e) => setSeconds(e.target.value)}
//       />
//       <label htmlFor="time-left">Time left: {time}</label>

//       <button onClick={() => {
//         if (Number(seconds) > 0) {
//           setTime(Number(seconds));
//           setIsRunning(true);
//         }
//       }}>Start</button>

//       <button onClick={() => setIsRunning(false)}>Stop</button>

//       <button onClick={() => {
//         setTime(0);
//         setIsRunning(false);
//       }}>Reset</button>
//     </div>
    
//   );
// }

// export default App;













// import React, { useState, useEffect } from 'react';

// function App() {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     if (!isRunning) return;

//     const timeid = setInterval(() => {
//       setTime((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(timeid);
//   }, [isRunning]);

//   return (
//     <div>
//       <h1>{time}</h1>

//       <button onClick={() => setIsRunning(true)}>Start</button>
//       <button onClick={() => setIsRunning(false)}>Stop</button>
//       <button onClick={() => setTime(0)}>Reset</button>
//     </div>
//   );
// }

// export default App;
































// import React, { useState, useEffect } from 'react';

// const MouseTracker = () => {
//   const [coords, setCoords] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCoords({ x: e.clientX, y: e.clientY });
//       c

//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     // Cleanup
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div>
//       <p>Mouse X: {coords.x}</p>
//       <p>Mouse Y: {coords.y}</p>
//     </div>
//   );
// };

// export default MouseTracker;


    














// import { useEffect, useState } from "react"

// function App() {
//   const [x, y] = useState(MouseEvent.innerWidth)

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth)

//     window.addEventListener("resize", handleResize)

//     return () => window.removeEventListener("resize", handleResize);

//     return ()=>{
//      window. removeEventListener("resize", handleResize)
//     }
//   }, [])

//   return (
//     <div>
//       <p>window width: {Width}px</p>
//     </div>
//   )
// }

// export default App






// import { useEffect, useState } from "react";

// function App() {
//   const [Title, setTitle] = useState("HELLOW");
//   const [name, setName] = useState("amira");

//   useEffect(() => {
//     document.title = Title;
//     console.log(Title);
//   }, [Title]);
  

//   return (
//     <div>
//       <h1>enter your name</h1>

//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//   <h1>chooce Greatin</h1>

//       <input
//         type="text"
//         value={Title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//     </div>
//   );
// }

// export default App; 
               
               
               
               
               

















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
