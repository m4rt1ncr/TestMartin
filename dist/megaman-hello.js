"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var megamanHello;
(function (megamanHello) {
    function sayHello() {
        console.log('Megaman say Hello changed!!');
    }
    megamanHello.sayHello = sayHello;
    function sayGoodbye() {
        console.log('megaman say goodbye');
    }
    megamanHello.sayGoodbye = sayGoodbye;
})(megamanHello = exports.megamanHello || (exports.megamanHello = {}));
