'use strict';
var inIndex = 'Foo';

export default function() {
  console.log(inIndex);

  (function() {
    console.log('I can still use inIndex here', inIndex);
  })();
}
