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
    <div><h2>{item.State}</h2>
    <ul>
      {item.District.map((subitem)=>
      <li>
        {subitem.D}
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
