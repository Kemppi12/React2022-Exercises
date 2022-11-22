import { useHistory } from "react-router-dom";


const SwedenPage = () => {
  const history = useHistory();


  const backToFinlandHandler = ()=>{
  history.push('/');
  };

  return(
  <>
  <h2>Hejsan!</h2>
  <button onClick={backToFinlandHandler}>Back to Finland</button>
  </>
  );
};

export default SwedenPage;
