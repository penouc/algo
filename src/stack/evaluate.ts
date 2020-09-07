function evaluate(str: string): number {
  const ops: string[] = [];
  const vals: string[] = [];

  let i = 0;
  while (str[i]) {
    const s = str[i];

    switch (s) {
      case "(":
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        ops.push(s);
        break;
      case ")":
        const op = ops.pop();
        let v = Number(vals.pop());

        if (op === "+") {
          v = Number(vals.pop()) + v;
        } else if (op === "-") {
          v = Number(vals.pop()) - v;
        } else if (op === "*") {
          v = Number(vals.pop()) * v;
        } else if (op === "/") {
          v = Number(vals.pop()) / v;
        }

        vals.push(String(v));
        break;
      default:
        vals.push(s);
    }

    i++;
  }

  return Number(vals.pop());
}

const evaluated = evaluate("(1+(2+3))");

console.log(evaluated);
