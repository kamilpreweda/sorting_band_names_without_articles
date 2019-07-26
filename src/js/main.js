"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const bands = ['The Black Dahlia Murder', 'Thy Art is Murder', 'Gojira', 'Slipknot', 'Oh, Sleeper', 'A Day To Remember', 'An Old Dog', 'A Skylit Drive', 'We Came As Romans', 'Aversions Crown', 'Behemoth', 'Billie Eilish', 'Arctic Monkeys', 'Hate', 'A Night In Texas', 'Oceano', 'Lost Soul'];

function strip(bandName) {
  return bandName.replace(/^(a |the |an)/i, '').trim(); // regular expression - ^ stands for "starts with", words that we want to ignore are in the brackets and spreaded by "|", "/i" stands for insensitive, and finally we are replacing that with nothing "''".//
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join(''); // we need to put join at the end to join our array into the string (or else we'll get comas in our list)//
