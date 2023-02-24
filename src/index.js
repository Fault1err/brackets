module.exports = function check(str, bracketsConfig) {

  const openBr = ['(', '{'];
  const doubledBr = ['|', '7', '8'];
  const pairsBr = {
    [')']: '(',
    ['}']: '}',
    ['|']: '|',
    ['1']: '2',
    ['3']: '4',
    ['5']: '6',
    ['7']: '7',
    ['8']: '8',

  };

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let current = str[i];

        if (openBr.includes(current)) {
      stack.push(current);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let top = stack[stack.length - 1];

      if (pairsBr[current] === top) {
        stack.pop();
      } else {
        return false;
      }

      if (doubledBr.includes(current)) {
        if (stack.includes(current)) {
          stack.pop(current);
        } else {
          stack.push(current);
        }
      }
  
    }
  }

  return stack.length === 0;
}
