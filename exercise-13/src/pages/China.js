import { useHistory } from "react-router-dom";



  const ChinaPage = () => {
    const history = useHistory();
  
  
    const backToFinlandHandler = ()=>{
    history.push('/')
    };
  
    return(
    <>
    <h2>Welcome to oriental and exotic China!</h2>
    <button onClick={backToFinlandHandler}>Back to Finland</button>
    </>
    );
  };

  export default ChinaPage;
  