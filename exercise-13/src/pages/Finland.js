import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";
import { useState } from "react";
import { useHistory } from "react-router-dom";
//import { getValue } from "@testing-library/user-event/dist/utils";

const FinlandPage = () => {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const showModalHandler = () => {
    setShowModal(true);
  };

  const cancelModalHandler = () => {
    setShowModal(false);
  };

  const randomHandler = () => {


    let randomValue = Math.random();

    if (randomValue < 0.20){
    history.push("/italy");    //history.replace("/italy"); (voi mahd. käyttää mutta korvaa vanhan tai "edellisen")
    }  else if (randomValue < 0.4){
      history.push("/brazil");
    } 
    else if (randomValue < 0.6){
      history.push("/sweden");
    }
    else if (randomValue < 0.8){
      history.push("/china");
    }
    else {
      history.push("/canada")}
      
  };

  return (
    <div>
      <h2>You are at Helsinki airport. Where do you want to travel?</h2>
      <button onClick={showModalHandler}>Go to random destination!</button>
      {showModal && ( 
        <Modal onCancel={cancelModalHandler} onConfirm={randomHandler}/>
      )}
      {showModal ? <Backdrop onClick={cancelModalHandler} /> : null}
    </div>
  );
};


export default FinlandPage;

