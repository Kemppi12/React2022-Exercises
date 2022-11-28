import AddItem from "./components/AddItem";
import { useState } from "react";
import MenuList from "./components/MenuList";
import "./components/Menu.css";

const menu = [
  {
    id: 1,
    name: "hamburger",
    price: 9,
  },
  {
    id: 2,
    name: "pizza",
    price: 12,
  },
  {
    id: 3,
    name: "meatballs",
    price: 10,
  },
];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);


  /*const removeHandler = (id) => {
    console.log("Clicked " + id);
    setMenuItems((prevMenuItems) =>
      prevMenuItems.filter((item) => {
        return item.id !== id;
      })
    );
  };*/


  let menuList = < MenuList menuItems = {menuItems}/>;

  return (
    <><div className="menu">
      <><h1>Pekan Purilainen</h1>
        <ul>{menuList}</ul></>
    </div><div>
        <h2>
          <AddItem setMenuItems={setMenuItems} />
        </h2>
      </div></>

  )

};

export default App;
