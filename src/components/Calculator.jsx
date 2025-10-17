import { useReducer, useState } from "react";
import { factorial, extractLastNum, calculateResult, SCI_FUNC } from '../utils/External_Functions';
import Display from "./Display";
import Keys from "./Keys";
import History from "./History";

function calculatorReducer(state, action) {
  const { value } = action;

  switch (value) {
    case "AC":
      return {
        ...state,
        expression: "",
        displayExp: "",
        result: "0"
      };

    case "DEL":
      return {
        ...state,
        expression: state.expression.slice(0, -1),
        displayExp: state.displayExp.slice(0, -1)
      };

    case "√":
      return {
        ...state,
        expression: state.expression + "√",
        displayExp: state.displayExp + value
      };

    case "!": {
      const lastNum = extractLastNum(state.expression);
      if (lastNum != null) {
        const num = parseFloat(lastNum);
        const factResult = factorial(num);
        return {
          ...state,
          expression: state.expression.replace(lastNum, factResult.toString()),
          displayExp: state.displayExp + value
        };
      }
      return state;
    }
    case "=": {
      const result = calculateResult(state.expression);
      const newEntry = {
        expression: state.displayExp,
        result,
      };

      const lastEntry = state.history[0];
      const isDuplicate =
        lastEntry &&
        lastEntry.expression === newEntry.expression &&
        lastEntry.result === newEntry.result;

      return {
        ...state,
        result,
        history: isDuplicate ? state.history : [newEntry, ...state.history],
      };
    }
    default:
      if (value in SCI_FUNC) {
        return {
          ...state,
          expression: state.expression + SCI_FUNC[value],
          displayExp: state.displayExp + value
        };
      } else {
        return {
          ...state,
          expression: state.expression + value,
          displayExp: state.displayExp + value
        };
      }
  }
}

export default function Calculator() {
  const [state, dispatch] = useReducer(calculatorReducer, {
    expression: "",
    displayExp: "",
    result: "0",
    history: []
  });

  const handleButton = (value) => {
    dispatch({ value });
  };

  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="calculator-container">

      <div className="calculator">
        <Display displayExpression={state.displayExp} result={state.result} setShowHistory={setShowHistory} />
        <Keys handleButton={handleButton} />
      </div>

      {showHistory && (<History history={state.history} onClose={() => setShowHistory(false)} />)}
    </div>
  )
}