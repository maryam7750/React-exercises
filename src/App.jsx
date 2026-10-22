
import Greating from "./Prp";

function App() {

  const CurrentUser = "leyla";
  const role ="Amiira11@gmail.com/";

  return (
    <>
      <Greating
      
      CurrentUser={CurrentUser} 
     role={role}/>

     <Greating
     CurrentUser={CurrentUser} 
     role ={role}/>



      <Greating
      
      CurrentUser={"nuura"} 
     role="nuuraa11@gmail.com/"/>


      <Greating
      
      CurrentUser={"sumay"} 
     role="sumayaa11@gmail.com/"/>
     
     
    </>

    
  );
  
}

export default App;
