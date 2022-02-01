 
var telephoneWords = function (digitString) {
  // TODO: return every combination that can be spelled on a phone with these digits
  var phoneDigitsToLetters = {
    0: '0',
    1: '1',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ'
  };

  let digitalArray = digitString.split('');

    let num1 = phoneDigitsToLetters[digitalArray[0]];
    let num2 = phoneDigitsToLetters[digitalArray[1]];
    let num3 = phoneDigitsToLetters[digitalArray[2]];
    let num4 = phoneDigitsToLetters[digitalArray[3]];

    let combos = [];


    for(let a of num1) {
      for(let b of num2) {
          for(let c of num3) {
            for(let d of num4){
              combos.push(a+b+c+d);
            }

          }
      }
  }



    return combos;
};
