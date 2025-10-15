export default function Display({displayExpression, result}) {
  return (
    <div className="display">
        <p className="expression"> {displayExpression} </p>
        <p className="result">{result}</p>
    </div>
  )
}