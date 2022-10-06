/*import "./Country.css";*/


const Country = (props) => {
    return (
      <div>
        <p>Name: {props.countryData.name}</p>  
        <p>Capital: {props.countryData.capital}</p>
        <p>......</p>
      </div>
    );
  };
  
  
  export default Country;