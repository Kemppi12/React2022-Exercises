import { useHistory } from "react-router-dom";



const CanadaPage = () => {
  const history = useHistory();


  const backToFinlandHandler = ()=>{
  history.push('/')
  };

  return(
  <>
  <h2>Welcome to cold and snowy Canada!</h2>
  <button onClick={backToFinlandHandler}>Back to Finland</button>
  </>
  );
};

export default CanadaPage;
