import Calculator from "./components/Calculator";

export default function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Scientific Calculator</h1>
      </div>
      <Calculator />
      <p className="developer_info">
        Developped by 👨‍💻 <span>ha-ayoub</span>
      </p>
    </div>
  )
}