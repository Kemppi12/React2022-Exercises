import { useHistory } from "react-router-dom";


const ItalyPage = () => {
  const history = useHistory();


  const backToFinlandHandler = ()=>{
  history.push('/');
  };

  return(
  <>
  <h2>Welcome to Italy!</h2>
  <button onClick={backToFinlandHandler}>Back to Finland</button>
  </>
  );
};

export default ItalyPage;
