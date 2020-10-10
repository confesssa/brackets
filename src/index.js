module.exports = function check(str, bracketsConfig) {
    let newString = str;

    let brackets = bracketsConfig.flat();


function es(newString,brackets) {
for (let i = 0; i <newString.length; i++) {
  for (let j = 0; j < brackets.length; j++) {
  if (brackets[j] === newString[i] && brackets[j+1] === newString[i + 1]) {
  newString = newString.slice(0, i) + newString.slice(i + 2);
  };
  };
};
if (newString.length === 0) {
    return true;
    };
    if (str === newString) {
    return false;
    } else {
     es();
    };
};


  }
