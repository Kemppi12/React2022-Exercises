import Country from "./components/Country";


const CountryList = [
  {
    name: "Belgium",  
    capital: "Bruges",
  },
  {
    name: "Finland",
    capital: "Helsinki",
  },
  {
    name: "Spain",
    capital: "Madrid",
  },
  {
    name: "UK",
    capital: "London",
  },
];


const App = () => {
  return (
    <div>
      <h1>Countries</h1>
      <Country countryData={CountryList[0]}/>
      <Country countryData={CountryList[1]}/>
      <Country countryData={CountryList[2]}/>
      <Country countryData={CountryList[3]}/>
    </div>
  );
};

export default App;
