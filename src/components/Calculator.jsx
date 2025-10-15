import { useReducer } from "react";
import Display from "./Display";
import Keys from "./Keys";
import { SCI_FUNC } from "../Helper/SCIENTIFIC_FUNCTION"
import { factorial, extractLastNum, calculateResult } from '../Helper/External_Functions';

function calculatorReducer(state, action) {
  const { value } = action;

  switch (value) {
    case "AC":
      return {
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

    case "!":{
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
    case "=":{
      const result = calculateResult(state.expression);
      return {
        ...state,
        result
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
    result: "0"
  });

  const handleButton = (value) => {
    dispatch({ value });
  };

  return (
    <div className="calculator">
      <Display displayExpression={state.displayExp} result={state.result}/>
      <Keys handleButton={handleButton}/>
    </div>
  )
}