import MenuItem from './MenuItem'
import "./Menu.css";

const MenuList = (props) => {


  const removeHandler = (props) => {
    props.setMenuItems((prevMenuItems) =>
      prevMenuItems.filter((item) => {
        return item.id !== props.id;
      })
    );
  };

  return (
    <ul className= "menu">
       {props.menuItems.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            removeHandler={removeHandler}                     
            />
        ))}
    </ul>   
);
}


export default MenuList

/*const menus = [
    {
      id: 1,
      name: "breakfast",
      time: "6-10",
    },
    {
      id:2,
      name: "lunch",
      time: "10-2",
    },
    {
      id:3,
      name: "dinner",
      time: "12-20",
    },
  ];*/

