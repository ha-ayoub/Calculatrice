import Calculator from "./components/Calculator";
import Signature from "./components/Signature";

export default function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Scientific Calculator</h1>
      </div>
      <Calculator />
      <Signature />
    </div>
  )
}