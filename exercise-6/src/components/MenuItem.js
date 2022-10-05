//import {useState} from "react";

const MenuItem = (props) => {
//muuttuja jonka tilaa seurataan
//  const [name, setName] = useState(props.name/*default value*/);
// funktio jolla muutetaan tilaa
  const clickHandler = () => {
    console.log('Moi');
    props.removeHandler(props.id);
  };


  return (
    <div>
      <p>
        {props.name} {props.price}
      </p>
      <button onClick= {clickHandler}>Delete</button>
    </div>
  );
};

export default MenuItem;
