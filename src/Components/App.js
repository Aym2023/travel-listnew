import { useState } from "react";
import  Logo  from "./Logo";
import  Form  from "./Form";
import  PackingList  from "./PackingList";
import  Stats  from "./Stats";

export default function App () {
const [items, setItems] = useState([]);

function handelAddItems (item) {
       setItems((items) => [...items, item]);
}

function handelDeleteItems (id) {
        setItems((items) => items.filter((item) => item.id !== id));
}

function handeltoggleItems (id) {
  setItems((items) => 
  items.map((item)=>
   item.id === id ? {...item, packed : !item.packed} : item));
}

function handelClearList (id) {
  const confirmed = window.confirm("Are you sure you want to delete all items?");
  if (confirmed) setItems([])
}

  return (
    <div className="app" >
    <Logo />
    <Form onAddItems={handelAddItems} />
    <PackingList
     items={items}
     onDelteItems={handelDeleteItems}
     onToggleItems={handeltoggleItems}
     onClearList={handelClearList} 
     />
    < Stats items={items} />
    </div>
  );
}


