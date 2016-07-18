'use strict';
var inIndex = 'Foo';

export default function() {
  (function () {
    console.log('I can still use inIndex here', inIndex);
  })();

  (function () {
    var inIndex = 'Different here!';
    console.log('I can change inIndex here', inIndex);
  })();

  console.log(inIndex);
}
