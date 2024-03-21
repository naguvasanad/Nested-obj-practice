
import './App.css';

import Menu from './Menu';


function App() {

  

const data = 
  {
   children:[
    {name:"karnataka",
    children:[
      {name:"koppal",
    children:[
      {name:"kustagi",
    children:[
      {name:"Hanamsagar"}
    ]
    },
      {name:"Gangavathi"}
    ]
    },
      {name:"gadag",
    children:[
      {name:"Rona"},
      {name:"gadag"}
    ]
    }
    ]
  },
    {
      name:"tamilnadu",
      children:[
        { name:"chennai" },
        {name:"tanjavoor"}
      ]
    },
    {
      name:"Andrapradesh",
      children:[
        { name:"hydrabad" },
        {name:"penukondum"}
      ]
    }
   ]
  }





  return (
   <>
   <Menu items={data}/>
   </>
  );
}

export default App;
