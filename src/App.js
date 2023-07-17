import "./App.css";
import Weather from "./Weather";
import "./Weather.css";
function App() {
  return (
    <div className="App">
      <div className="container-weather">
        <h1 className="title-search">Search for a city</h1>
        <Weather />
      </div>
      <div className="container-forecast">
        <div className="forecast-grid"></div>
      </div>
    </div>
  );
}

export default App;
