'use strict';
/**
 * Module dependencies
 */

var benchmark = require('benchmark');
var benchmarks = require('beautify-benchmark');
var seedrandom = require('seedrandom');

/*
 * Globals for benchmark.js
 */

global.buffer = getbuffer(10000);
global.cipher = require('..');
global.string = getbuffer(10000).toString();

var suite = new benchmark.Suite;

var encoding = [ 'hex', 'binary', 'base64' ];
var ciphers = require('crypto').getCiphers();
for (var i = 0, ii = ciphers.length; i < ii; ++i) {
  var j = 2;
  // for (var j = 0, jj = encoding.length; j < jj; j++) {
  // suite.add({
  // name: ' string-' + encoding[j] + '-' + ciphers[i],
  // minSamples: 50,
  // fn: 'var val = cipher(string, "' + ciphers[i] + '", "' + encoding[j]
  // + '")'
  // });
  suite.add({
    name: ' buffer-' + encoding[j] + '-' + ciphers[i],
    minSamples: 50,
    fn: 'var val = cipher(buffer, "' + ciphers[i] + '", Buffer("ciao"), "'
      + encoding[j] + '")'
  });
  // }
}

suite.on('start', function onCycle(event) {

  process.stdout.write('  10000 body\n\n');
}).on('cycle', function onCycle(event) {

  benchmarks.add(event.target);
}).on('complete', function onComplete() {

  benchmarks.log();
  console.log('Fastest is:' + this.filter('fastest').pluck('name') + '\n');
});

suite.run({
  async: false
});

function getbuffer(size) {

  var buffer = new Buffer(size);
  var rng = seedrandom('body ' + size);

  for (var j = 0, jj = buffer.length; j < jj; ++j) {
    buffer[j] = (rng() * 94 + 32) | 0;
  }

  return buffer;
}
