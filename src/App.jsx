import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    experience: "",
    skills: [],
    agreeToTerms: false,
    notifications: false
  });

  const [errors, setErrors] = useState({});

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Product Manager"
  ];

  const skillOptions = [
    "React", "JavaScript", "TypeScript", "Node.js",
    "Python", "Java", "UI Design", "API Development"
  ];

  const validateField = (name, value) => {
    let error = "";
    
    if (name === 'fullName') {
      if (!value.trim()) {
        error = "Full name is required";
      } else if (!/^[a-zA-Z\s]{2,30}$/.test(value)) {
        error = "Please enter a valid name (2-30 characters, letters only)";
      }
    }
    
    if (name === 'email') {
      if (!value) {
        error = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Please enter a valid email address";
      }
    }
    
    if (name === 'role') {
      if (!value) {
        error = "Please select a role";
      }
    }
    
    if (name === 'experience') {
      if (!value) {
        error = "Experience is required";
      } else if (isNaN(value) || value < 0 || value > 50) {
        error = "Please enter valid years of experience (0-50)";
      }
    }
    
    if (name === 'skills') {
      if (!value || value.length === 0) {
        error = "Please select at least one skill";
      }
    }
    
    if (name === 'agreeToTerms') {
      if (!value) {
        error = "You must agree to the terms";
      }
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Show validation immediately when user types/changes value
    const error = validateField(name, newValue);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSkillChange = (skill) => {
    const newSkills = formData.skills.includes(skill)
      ? formData.skills.filter(s => s !== skill)
      : [...formData.skills, skill];
    
    setFormData(prev => ({
      ...prev,
      skills: newSkills
    }));

    // Validate skills immediately
    const error = validateField('skills', newSkills);
    setErrors(prev => ({
      ...prev,
      skills: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const formErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        formErrors[key] = error;
      }
    });

    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formData);
      // Handle successful submission
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 ring-1 ring-zinc-900/5">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-8 text-center">
          Developer Application Form
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name Input */}
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border ${
                errors.fullName
                  ? 'border-red-300 ring-red-500'
                  : 'border-zinc-300 ring-blue-500'
              } px-3 py-2 text-sm focus:outline-none focus:ring-2`}
            />
            {errors.fullName && (
              <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border ${
                errors.email
                  ? 'border-red-300 ring-red-500'
                  : 'border-zinc-300 ring-blue-500'
              } px-3 py-2 text-sm focus:outline-none focus:ring-2`}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Role Select */}
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border ${
                errors.role
                  ? 'border-red-300 ring-red-500'
                  : 'border-zinc-300 ring-blue-500'
              } px-3 py-2 text-sm focus:outline-none focus:ring-2`}
            >
              <option value="">Select a role</option>
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
            {errors.role && (
              <p className="mt-2 text-sm text-red-600">{errors.role}</p>
            )}
          </div>

          {/* Experience Input */}
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Years of Experience
            </label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              min="0"
              max="50"
              className={`mt-1 block w-full rounded-lg border ${
                errors.experience
                  ? 'border-red-300 ring-red-500'
                  : 'border-zinc-300 ring-blue-500'
              } px-3 py-2 text-sm focus:outline-none focus:ring-2`}
            />
            {errors.experience && (
              <p className="mt-2 text-sm text-red-600">{errors.experience}</p>
            )}
          </div>

          {/* Skills Checkboxes */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Skills
            </label>
            <div className="grid grid-cols-2 gap-4">
              {skillOptions.map(skill => (
                <label key={skill} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.skills.includes(skill)}
                    onChange={() => handleSkillChange(skill)}
                    className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-zinc-600">{skill}</span>
                </label>
              ))}
            </div>
            {errors.skills && (
              <p className="mt-2 text-sm text-red-600">{errors.skills}</p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
            />
            <label className="text-sm text-zinc-700">
              I agree to the terms and conditions
            </label>
          </div>
          {errors.agreeToTerms && (
            <p className="mt-2 text-sm text-red-600">{errors.agreeToTerms}</p>
          )}

          {/* Notifications Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleChange}
              className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
            />
            <label className="text-sm text-zinc-700">
              Receive notifications about new opportunities
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;


// import { useState } from "react";

// function App() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     gender: "",
//     agree: false,
//   });

//   const [submittedData, setSubmittedData] = useState(null);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedData(formData);
//   };

//   return (
//     <div>
//       <h1>Registration Form</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           placeholder="Enter Username"
//           value={formData.username}
//           onChange={handleChange}
//           required
//         />

//         <br /><br />

//         <input
//           type="email"
//           name="email"
//           placeholder="Enter Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <br /><br />

//         <input
//           type="password"
//           name="password"
//           placeholder="Enter Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

//         <br /><br />

//         <select
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Gender</option>
//           <option value="Female">Female</option>
//           <option value="Male">Male</option>
//         </select>

//         <br /><br />

//         <label>
//           <input
//             type="checkbox"
//             name="agree"
//             checked={formData.agree}
//             onChange={handleChange}
//           />
//           I agree to the terms and conditions
//         </label>

//         <br /><br />

//         <button type="submit">Submit</button>
//       </form>

//       {submittedData && (
//         <div>
//           <h2>Submitted Information</h2>
//           <p>Username: {submittedData.username}</p>
//           <p>Email: {submittedData.email}</p>
//           <p>Password: {submittedData.password}</p>
//           <p>Gender: {submittedData.gender}</p>
//           <p>Agreed: {submittedData.agree ? "Yes" : "No"}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
















// import { useState } from "react";
// import styles from "./App.module.css";

// function App() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([
//     { id: 1, text: "hey whatsapp", completed: false },
//     { id: 2, text: "how are yu doing", completed: true },
//     { id: 3, text: "This is cool right ?", completed: false },
//   ]);

//   const addTodo = () => {
//     if (todo.trim() === "") return;

//     const newTodo = {
//       id: Date.now(),
//       text: todo,
//       completed: false,
//     };

//     setTodos([...todos, newTodo]);
//     setTodo("");
//   };

//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map((item) =>
//         item.id === id
//           ? { ...item, completed: !item.completed }
//           : item
//       )
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((item) => item.id !== id));
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.todoCard}>
//         <h1 className={styles.title}>My Todo List</h1>

//         <div className={styles.inputGroup}>
//           <input
//             type="text"
//             placeholder="Add a new todo..."
//             value={todo}
//             onChange={(e) => setTodo(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter") addTodo();
//             }}
//           />

//           <button onClick={addTodo} className={styles.addButton}>
//             Add
//           </button>
//         </div>

//         <div className={styles.todoList}>
//           {todos.map((item) => (
//             <div key={item.id} className={styles.todoItem}>
//               <label className={styles.todoLabel}>
//                 <input
//                   type="checkbox"
//                   checked={item.completed}
//                   onChange={() => toggleTodo(item.id)}
//                 />

//                 <span
//                   className={
//                     item.completed ? styles.completed : styles.todoText
//                   }
//                 >
//                   {item.text}
//                 </span>
//               </label>

//               {item.completed && (
//                 <button
//                   className={styles.deleteButton}
//                   onClick={() => deleteTodo(item.id)}
//                 >
//                   Delete
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;





// import customHook from "./customHook";
// function App() {
//   return (
//     <>
//    <div>customHook</div>
//    <ContactForm />
//     </>
//   );
// }export default App;







// import React, { useState } from 'react';
// import CartContext from './CartContext';
// import ProductItem from './ProductItem';
// import CartSummary from './CartSummary';

// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems(cartItems.filter((item) => item.id !== itemId));
//   };

//   const value = { cartItems, addToCart, removeFromCart };

//   return (
//     <CartContext.Provider value={value}>
//       <ProductItem itemId={1} itemName="Widget" price={19.99} />
//       <ProductItem itemId={2} itemName="Gadget" price={29.99} />
//       <CartSummary />
//     </CartContext.Provider>
//   );
// }

// export default App;





// import React, { useState } from 'react';
// import LanguageContext from './LanguageContext';
// import Greeting from './Greeting';

// function App() {
//   const [language, setLanguage] = useState('en');

//   const toggleLanguage = () => {
//     setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
//   };

//   return (
//     <LanguageContext.Provider value={language}>
//       <button onClick={toggleLanguage}>
//         Switch to {language === 'en' ? 'Spanish' : 'English'}
//       </button>
//       <Greeting />
//     </LanguageContext.Provider>
//   );
// }

// export default App;












// import MultiStepForm from './MultiStepForm';

// function App() {
//   return (
//     <div>
//       <MultiStepForm />
//     </div>
//   );
// }

// export default App;u








// import TodoList from './TodoList';

// function App() {
//   return (
//     <div>
//       <TodoList />
//     </div>
//   );
// }

// export default App;



// import LoginForm from './LoginForm';

// const App = () => {
//   return (
//     <div>
//       <LoginForm />
//     </div>
//   );
// };

// export default App;












// import UserList from './UserList';

// function App()   {
//   const users = [
//     { id: 1, name: 'mira', email: 'miira@example.com' },
//     { id: 2, name: 'mscuud', email: 'mascuud.com' },
//   ];

//   return (
//     <div>
//       <UserList users={users} />
//     </div>
//   );
// };

// export default App;









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
