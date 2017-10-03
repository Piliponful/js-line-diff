const LCSlenght = (input1, input2) => {
  const opt = initialize2dArr(input1.length, input2.length);
  for (let i = 1; i < input1.length; i++) {
    for (let j = 1; j < input2.length; j++) {
      if (input1[i] == input2[j]) {
            opt[i][j] = opt[i - 1][j - 1] + 1;
      } else {
            opt[i][j] = Math.max(opt[i][j - 1], opt[i - 1][j]);
      }
    }
  }
  return opt;
}

const initialize2dArr = (x, y) => {
  const arr = [];
  for(let i = 0; i < x; i++) {
    arr[i] = [];
    for(let j = 0; j < y; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
}

const diffToStrArr = (opt, input1, input2, i, j) => {
  if ((i >= 0) && (j >= 0) && (input1[i] == input2[j])) {
      return [
        ...diffToStrArr(opt, input1, input2, i - 1, j - 1),
        `  ${input1[i]}`
      ];
  } else if ((j > 0) && ((i == 0) || (opt[i][j - 1] >= opt[i - 1][j]))) {
      return [
        ...diffToStrArr(opt, input1, input2, i, j - 1),
        `+ ${input2[j]}`
      ];
  } else if ((i > 0) && ((j == 0) || (opt[i][j - 1] < opt[i - 1][j]))) {
      return [
        ...diffToStrArr(opt, input1, input2, i - 1, j),
        `- ${input1[i]}`
      ];
  } else {
      return [`* ${input1[i]} | ${input2[j]}`];
  }
}

const diff = (input1, input2) => {
  const M = input1.length, N = input2.length;
  const opt = LCSlenght(input1, input2);

  return diffToStrArr(opt, input1, input2, M - 1, N - 1);
}

if (module != undefined) {
  module.exports = {
    diff
  }
}