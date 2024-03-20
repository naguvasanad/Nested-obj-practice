import './App.css';


function App() {

  

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
      <h2 >
        <details>
          <summary> {item.State}</summary>
          {item.State}
        </details>
           
               </h2>
    <ul>
      {item.District.map((subitem)=>
      <li>
        <details>
          <summary> {subitem.D}</summary>
          {subitem.D}
        </details>
       
      </li>
      )}
    </ul>
    
    </div>
    )
   }
   
   </>
  );
}

export default App;
