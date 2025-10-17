import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Display({ displayExpression, result, setShowHistory }) {
  return (
    <div className="display">
      <div className="history">
        <button className="history-btn" onClick={() => setShowHistory(true)}>
          <FontAwesomeIcon icon={faClockRotateLeft} />
        </button>
      </div>
      <p className="expression"> {displayExpression} </p>
      <p className="result">{result}</p>
    </div>
  )
}