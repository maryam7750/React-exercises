import React from 'react'

const customHook = () => {

    const [count, setCount] = React.useState(null);
    const[ loaded, setLoaded] = React.useState(true);
    const [error, setError] = React.useState(null);
    useEffect(() => {


const fetchData=async () => {
    try {
        let Ismounted = true;
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if  (!response.ok) {
            throw new Error('http error! status: ${response.status}');
        }
        const data = await response.json();
        setCount(data);
        setLoaded(true);
        if (Ismounted) {
            setCount(data);
            setLoaded(false);
        }

        
     } catch (error){
        if (Ismounted) {
            setError(error);
            setLoaded(false);
        }
           
        }
    }
   fetchData();
   return () => {
    Ismounted = false;
   }

    },[])
    if (loaded) {
        return <h1>Loading...</h1>
    }


  return (
    <div>

        <h2>Custom Hook</h2>
        <p>calaawi</p>
        
    </div>
  )
}

export default customHook