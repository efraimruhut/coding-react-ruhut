import "./App.css";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";

class App extends React.Component<any> {
  render() {
    console.log("render called ...");
    return (
      <div style={{ textAlign: "center" }}>
        <Comp1 nama="Ruhut" umur={15} kelas="XE" siang={true} />
        <h1>
          <Comp2 />
        </h1>
      </div>
    );
  }
}
export default App;
