import "./App.css";
import Child from "./component/Child.js";
import "./App.css";
function App() {
  const handleName = (name) => {
    alert(`Hi Im ${name}`);
  };
  return (
    
    <div className="App">
      <Child
        fullName="Fedi jobrane"
        bio="Hi! there"
        profession="student"
        handleName={handleName}
      >
        <div>
          <img src={Image} style={{ width: 350, height: 300 }}></img>
        </div>
      </Child>
    </div>
  );
}

export default App;
