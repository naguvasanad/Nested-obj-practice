import { useState } from 'react';
import './App.css';


function App() {

  const [isOpened,setIsOpened] = useState(false);

const data = [
  {
   State: "Karnataka",
   District: [
   {D:"Koppal"},
   {D:"Gadag"},
   {D:"Bagalakot"}
   ]
  },
  {
    State: "Tamilnadu",
    District: [
      {D:"Chennai"}
    ]
  }

]



  return (
   <>
   <h1>States and ditricts</h1>
   
      {
    data.map((item)=>
   
    <div>
      <button onClick={()=>item.District && setIsOpened(!isOpened)}>{item.State}</button>
      

         {item.District.map((subitem)=>
      <div className={`subitem ${isOpened ? '' :'submenu-Shrunk'}`}> {subitem.D}</div>
         )}
    
    
    </div>
    )
   }
   
   </>
  );
}

export default App;
