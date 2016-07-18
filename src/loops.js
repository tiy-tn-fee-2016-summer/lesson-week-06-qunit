const itBe = ['Paul', 'John', 'Ringo', 'George'];

export default function () {
  console.log(itBe);

  for (var i = 0; i < 5; i++) {
    var varInForLoop = 'Hello world ' + i;
    // Do work in here
  }

  console.log(i);
  console.log('vars in for loops... ', varInForLoop);

  for (let y = 0; y < 10; y++) {
    let letInForLoop = 'Let in the for loop ' + y;
    const constInForLoop = 'Const in the for loop ' + y;
  }

  // let variables only exist within blocks (for, if, else)
  // console.log(y);
  // console.log(letInForLoop);
}
