'use strict';
/**
 * @file nodejs-cipher-performance main
 * @module nodejs-cipher-performance
 * @subpackage main
 * @version 0.0.0
 * @author hex7c0 <hex7c0@gmail.com>
 * @copyright hex7c0 2014
 * @license GPLv3
 */

/*
 * initialize module
 */
// import
var crypto = require('crypto');

/*
 * functions
 */
/**
 * main
 * 
 * @exports ciphers
 * @function ciphers
 * @param {String|Buffer} raw - Check README.md
 * @param {String} cipher - Check README.md
 * @param {String|Buffer} password - Check README.md
 * @param {String} encoding - Check README.md
 * @return {Object}
 */
function ciphers(raw, cipher, password, encoding) {

  var out = crypto.createCipher(cipher, password);
  return out.update(raw, 'utf8', encoding) + out.final(encoding);
}
module.exports = ciphers;
