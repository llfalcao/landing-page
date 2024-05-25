import "./App.scss";
// @ts-ignore
import HomeSectionOne from "./components/sections/HomeSectionOne";
// @ts-ignore
import HomeSectionTwo from "./components/sections/HomeSectionTwo";

function App() {
  return (
    <div className="App">
      {HomeSectionOne}
      {HomeSectionTwo}
    </div>
  );
}

export default App;
