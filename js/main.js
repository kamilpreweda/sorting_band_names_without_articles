!function(n){var e={};function r(i){if(e[i])return e[i].exports;var c=e[i]={i:i,l:!1,exports:{}};return n[i].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=n,r.c=e,r.d=function(n,e,i){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)r.d(i,c,function(e){return n[e]}.bind(null,c));return i},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function () {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function (err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\nconst bands = ['The Black Dahlia Murder', 'Thy Art is Murder', 'Gojira', 'Slipknot', 'Oh, Sleeper', 'A Day To Remember', 'An Old Dog', 'A Skylit Drive', 'We Came As Romans', 'Aversions Crown', 'Behemoth', 'Billie Eilish', 'Arctic Monkeys', 'Hate', 'A Night In Texas', 'Oceano', 'Lost Soul'];\r\n\r\nfunction strip(bandName) {\r\n  return bandName.replace(/^(a |the |an)/i, '').trim(); // regular expression - ^ stands for \"starts with\", words that we want to ignore are in the brackets and spreaded by \"|\", \"/i\" stands for insensitive, and finally we are replacing that with nothing \"''\".//\r\n}\r\n\r\nconst sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);\r\n\r\ndocument.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join(''); // we need to put join at the end to join our array into the string (or else we'll get comas in our list)//\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUE7O0FBRUEsNEVBQTRFLEtBQUssaUJBQWlCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxyXG5cclxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XHJcbiAgICAgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xyXG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XHJcblxyXG5jb25zdCBiYW5kcyA9IFsnVGhlIEJsYWNrIERhaGxpYSBNdXJkZXInLCAnVGh5IEFydCBpcyBNdXJkZXInLCAnR29qaXJhJywgJ1NsaXBrbm90JywgJ09oLCBTbGVlcGVyJywgJ0EgRGF5IFRvIFJlbWVtYmVyJywgJ0FuIE9sZCBEb2cnLCAnQSBTa3lsaXQgRHJpdmUnLCAnV2UgQ2FtZSBBcyBSb21hbnMnLCAnQXZlcnNpb25zIENyb3duJywgJ0JlaGVtb3RoJywgJ0JpbGxpZSBFaWxpc2gnLCAnQXJjdGljIE1vbmtleXMnLCAnSGF0ZScsICdBIE5pZ2h0IEluIFRleGFzJywgJ09jZWFubycsICdMb3N0IFNvdWwnXTtcclxuXHJcbmZ1bmN0aW9uIHN0cmlwKGJhbmROYW1lKSB7XHJcbiAgcmV0dXJuIGJhbmROYW1lLnJlcGxhY2UoL14oYSB8dGhlIHxhbikvaSwgJycpLnRyaW0oKTsgLy8gcmVndWxhciBleHByZXNzaW9uIC0gXiBzdGFuZHMgZm9yIFwic3RhcnRzIHdpdGhcIiwgd29yZHMgdGhhdCB3ZSB3YW50IHRvIGlnbm9yZSBhcmUgaW4gdGhlIGJyYWNrZXRzIGFuZCBzcHJlYWRlZCBieSBcInxcIiwgXCIvaVwiIHN0YW5kcyBmb3IgaW5zZW5zaXRpdmUsIGFuZCBmaW5hbGx5IHdlIGFyZSByZXBsYWNpbmcgdGhhdCB3aXRoIG5vdGhpbmcgXCInJ1wiLi8vXHJcbn1cclxuXHJcbmNvbnN0IHNvcnRlZEJhbmRzID0gYmFuZHMuc29ydCgoYSwgYikgPT4gc3RyaXAoYSkgPiBzdHJpcChiKSA/IDEgOiAtMSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFuZHMnKS5pbm5lckhUTUwgPSBzb3J0ZWRCYW5kcy5tYXAoYmFuZCA9PiBgPGxpPiR7YmFuZH08L2xpPmApLmpvaW4oJycpOyAvLyB3ZSBuZWVkIHRvIHB1dCBqb2luIGF0IHRoZSBlbmQgdG8gam9pbiBvdXIgYXJyYXkgaW50byB0aGUgc3RyaW5nIChvciBlbHNlIHdlJ2xsIGdldCBjb21hcyBpbiBvdXIgbGlzdCkvL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);