'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
 let positivos = 0;
  let negativos = 0;
  let zeros = 0;

  for (let num of arr) {
    if (num > 0) positivos++;
    else if (num < 0) negativos++;
    else zeros++;
  }

  let total = arr.length;

  console.log((positivos / total).toFixed(6));
  console.log((negativos / total).toFixed(6)); 
  console.log((zeros / total).toFixed(6));     
}


function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
