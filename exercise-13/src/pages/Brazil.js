import { useHistory } from "react-router-dom";



const BrazilPage = () => {
  const history = useHistory();


  const backToFinlandHandler = ()=>{
  history.push('/');
  };

  return(
  <>
  <h2>Welcome to Rio!</h2>
  <button onClick={backToFinlandHandler}>Back to Finland</button>
  </>
  );
};

export default BrazilPage;
