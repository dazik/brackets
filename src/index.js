module.exports = function check(str, bracketsConfig) {
    let currentChar,
        lastChar,
        stack = [];
    for (let i = 0; i < str.length; i++) {
        currentChar = str[i];
        for (let k = 0; k < bracketsConfig.length; k++) {
            if (bracketsConfig[k][0] === bracketsConfig[k][1] && currentChar === bracketsConfig[k][0]) {
                if (stack.length > 0) {
                    lastChar = stack[stack.length - 1];
                    if (currentChar === lastChar) {
                        stack.pop();
                        break;
                    }
                }
            }
            if (bracketsConfig[k][0] === currentChar) {
                stack.push(currentChar);
            } else if (bracketsConfig[k][1] === currentChar) {
                if (stack.length > 0) {
                    lastChar = stack[stack.length - 1];
                    if (currentChar === bracketsConfig[k][1] && lastChar === bracketsConfig[k][0]) {
                        stack.pop();
                    }
                } else if (bracketsConfig[k][0] != bracketsConfig[k][1]) {
                    return false;
                }
            }
        }
    }
    return stack.length === 0;
}