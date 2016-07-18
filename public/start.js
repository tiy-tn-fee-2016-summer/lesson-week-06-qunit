var global = "Hey there from a public js file";

(function() {
  var oldSchool = 'Yo';
  window.reallyOldSchool = 'Dawg';

  console.log(window.oldSchool);
  console.log(reallyOldSchool);

  // Declared functions are hoisted to the top of their scope
  console.log(start);

  function start() {
    'use strict';

    window.x = 'Hey';

    console.log('a before declaring var', a);

    var a; // Would not work with let since let does not hoist
    console.log('a before assigning', a);

    a = 5;
    console.log('a after declaring var', a);
  }

  console.log('hoistMe is a var so it has not been assigned yet', hoistMe);


  // This annonymous function can never be called
  (function() {
    var x = 'something';
  })

  var hoistMe = function() {
    console.log('HI');
  };

  start();
  console.log('x', x);

  const index = require('index');

  index();

  const loops = require('loops');

  loops();
})();
