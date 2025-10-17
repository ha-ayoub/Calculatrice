export const SCI_FUNC = {
  sin: "Math.sin",
  cos: "Math.cos",
  ln:  "Math.log", 
  log: "Math.log10",
  tan: "Math.tan",
  π:   "Math.PI",
  e:   "Math.exp",
  "^": "**",
}

export function factorial(n) {
  if (n < 0) return undefined;
  
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

export function extractLastNum(exp) {
  const numbers = exp.match(/\d+\.?\d*/g);
  return numbers ? numbers[numbers.length - 1] : null;
}

export function calculateResult(expression) {
  if (expression.length === 0) {
    return "An Error Occurred!";
  }
  
  try {
    let processedExp = expression;
    // case Square root
    processedExp = processedExp.replace(/√(\d+\.?\d*)/g, 'Math.sqrt($1)');
    
    let compute = eval(processedExp);
    compute = parseFloat(compute.toFixed(4));
    return compute.toString();

  } catch (error) {
    console.error(error.message);
    return "An Error Occurred!";
  }
}